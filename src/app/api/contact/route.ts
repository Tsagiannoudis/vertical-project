import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { CreateEmailOptions } from 'resend';

export async function POST(request: Request) {
  // 1. Διαβάζουμε και ελέγχουμε τις μεταβλητές περιβάλλοντος μέσα στη συνάρτηση
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO;
  const emailFrom = process.env.EMAIL_FROM; // Χρησιμοποιούμε μεταβλητή περιβάλλοντος και για το 'from'

  if (!resendApiKey || !emailTo || !emailFrom) {
    console.error('Missing one or more required environment variables: RESEND_API_KEY, EMAIL_TO, EMAIL_FROM');
    // Επιστρέφουμε ένα γενικό μήνυμα σφάλματος στον client
    return NextResponse.json({ message: 'Σφάλμα διακομιστή. Παρακαλώ δοκιμάστε ξανά αργότερα.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { name, surname, email, phone, message } = body;

    // 2. Βασικός έλεγχος (validation) των δεδομένων στην πλευρά του server
    if (!name || !surname || !email || !message) {
      return NextResponse.json({ message: 'Λείπουν υποχρεωτικά πεδία.' }, { status: 400 });
    }

    // 3. Αρχικοποιούμε τον Resend client αφού βεβαιωθούμε ότι το κλειδί υπάρχει
    const resend = new Resend(resendApiKey);

    const emailPayload: CreateEmailOptions = {
      from: `Vertical Project <${emailFrom}>`, // Καλύτερη πρακτική για το 'from'
      to: [emailTo],
      replyTo: email,
      subject: `Νέα φόρμα επικοινωνίας - ${name} ${surname}`,
      html: `
        <h1>Νέο Μήνυμα Επικοινωνίας</h1>
        <p><strong>Όνομα:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν δόθηκε'}</p>
        <hr>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      // logging για καλύτερη διάγνωση του σφάλματος
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      // Επιστρέφουμε ένα γενικό μήνυμα σφάλματος για ασφάλεια
      return NextResponse.json({ message: 'Αποτυχία αποστολής του μηνύματος.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });
  } catch (error) {
    console.error('Internal Server Error:', error);
    // Χειριζόμαστε σφάλματα κατά την ανάλυση του JSON ή άλλα απρόβλεπτα σφάλματα
    if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Μη έγκυρη μορφή δεδομένων.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Αποτυχία αποστολής του μηνύματος.' }, { status: 500 });
  }
}