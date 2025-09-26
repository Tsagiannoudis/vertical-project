import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '../ContactFormEmail';

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO;
  const emailFrom = process.env.EMAIL_FROM;

  if (!resendApiKey || !emailTo || !emailFrom) {
    console.error("Missing one or more required environment variables: RESEND_API_KEY, EMAIL_TO, EMAIL_FROM");
    return NextResponse.json({ message: 'Σφάλμα διακομιστή. Παρακαλώ δοκιμάστε ξανά αργότερα.' }, { status: 500 });
  }

  try {
    const { name, surname, email, phone, message } = await request.json();

    if (!name || !surname || !email || !message) {
      return NextResponse.json({ message: 'Λείπουν υποχρεωτικά πεδία.' }, { status: 400 });
    }

    const resend = new Resend(resendApiKey);

    const emailPayload = {
      from: `Vertical Project <${emailFrom}>`,
      to: [emailTo],
      reply_to: email,
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`, // Θέμα
      react: ContactFormEmail({ name, surname, email, phone, message }),
    };
    
    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      // Log the detailed error from Resend
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { message: `Αποτυχία αποστολής: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });

  } catch (error) {
    console.error("Internal Server Error:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: 'Μη έγκυρη μορφή δεδομένων.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Αποτυχία αποστολής του μηνύματος.' }, { status: 500 });
  }
}