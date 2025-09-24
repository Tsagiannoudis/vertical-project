import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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
      replyTo: email,
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`, // Θέμα
      html: `
        <h1>Νέο Μήνυμα Επικοινωνίας</h1>
        <p><strong>Όνομα:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν δόθηκε'}</p>
        <hr />
        <h2>Μήνυμα:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('Resend API Error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ message: 'Αποτυχία αποστολής του μηνύματος.' }, { status: 500 });
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