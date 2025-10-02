import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Δημιουργούμε ένα instance του Resend client
// Ο constructor θα διαβάσει αυτόματα το RESEND_API_KEY από τις μεταβλητές περιβάλλοντος
const resend = new Resend(process.env.RESEND_API_KEY);

// Η διεύθυνση email στην οποία θα στέλνονται τα μηνύματα
const emailTo = process.env.EMAIL_TO;

export async function POST(request: Request) {
  // Έλεγχος ασφαλείας: Βεβαιωνόμαστε ότι οι μεταβλητές υπάρχουν
  if (!process.env.RESEND_API_KEY || !emailTo) {
    console.error("Resend API Key or Email To is not configured.");
    return NextResponse.json({ message: 'Σφάλμα διακομιστή. Παρακαλώ δοκιμάστε ξανά αργότερα.' }, { status: 500 });
  }

  try {
    // Παίρνουμε τα δεδομένα από το σώμα του request (από τη φόρμα)
    const { name, surname, email, message } = await request.json();

    // Στέλνουμε το email χρησιμοποιώντας το Resend
    const { data, error } = await resend.emails.send({
      // ΣΗΜΑΝΤΙΚΟ: Χρησιμοποιούμε το onboarding@resend.dev για να αποφύγουμε προβλήματα με το spam
      // στο δωρεάν πλάνο.
      from: `Vertical Project <onboarding@resend.dev>`,
      to: [emailTo],
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`,
      // Το reply_to επιτρέπει να πατήσεις "Απάντηση" και να απαντήσεις απευθείας στον χρήστη
      reply_to: email,
      // Το περιεχόμενο του email
      html: `
        <h2>Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Επώνυμο:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: 'Σφάλμα κατά την αποστολή του email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });

  } catch (e) {
    console.error("API route error:", e);
    return NextResponse.json({ message: 'Υπήρξε ένα μη αναμενόμενο σφάλμα.' }, { status: 500 });
  }
}