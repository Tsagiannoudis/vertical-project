import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Δημιουργούμε ένα instance του Resend client
// Ο constructor θα διαβάσει αυτόματα το RESEND_API_KEY από τις μεταβλητές περιβάλλοντος
const resend = new Resend(process.env.RESEND_API_KEY);

// Η διεύθυνση email στην οποία θα στέλνονται τα μηνύματα
const emailTo = process.env.EMAIL_TO;

// Ορίζουμε το σχήμα των δεδομένων που περιμένουμε από τη φόρμα χρησιμοποιώντας το Zod
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Το όνομα είναι υποχρεωτικό.' }),
  surname: z.string().min(1, { message: 'Το επώνυμο είναι υποχρεωτικό.' }),
  email: z.string().email({ message: 'Μη έγκυρη διεύθυνση email.' }),
  phone: z.string().optional(), // Το τηλέφωνο είναι προαιρετικό
  message: z.string().min(1, { message: 'Το μήνυμα είναι υποχρεωτικό.' }),
});

export async function POST(request: NextRequest) {
  // Έλεγχος ασφαλείας: Βεβαιωνόμαστε ότι οι μεταβλητές υπάρχουν
  if (!process.env.RESEND_API_KEY || !emailTo) {
    console.error("Resend API Key or Email To is not configured.");
    return NextResponse.json({ message: 'Σφάλμα διακομιστή. Παρακαλώ δοκιμάστε ξανά αργότερα.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    // Επικυρώνουμε τα δεδομένα με το schema του Zod
    const validatedData = contactFormSchema.parse(body);
    const { name, surname, email, phone, message } = validatedData;

    // Στέλνουμε το email χρησιμοποιώντας το Resend
    const { error } = await resend.emails.send({
      from: `Vertical Project <onboarding@resend.dev>`,
      to: [emailTo],
      // Το reply_to επιτρέπει να πατήσεις "Απάντηση" και να απαντήσεις απευθείας στον χρήστη
      replyTo: email,
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`,
      // Το περιεχόμενο του email
      html: `
        <h1>Νέο Μήνυμα Επικοινωνίας</h1>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Επώνυμο:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν δόθηκε'}</p>
        <hr />
        <h2>Μήνυμα:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: 'Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });

  } catch (e) {
    // Αν το validation του Zod αποτύχει, θα πιάσουμε το σφάλμα εδώ
    if (e instanceof z.ZodError) {
      return NextResponse.json({ message: 'Μη έγκυρα δεδομένα.', errors: e.errors }, { status: 400 });
    }

    console.error("API route error:", e);
    return NextResponse.json({ message: 'Παρουσιάστηκε ένα εσωτερικό σφάλμα.' }, { status: 500 });
  }
}