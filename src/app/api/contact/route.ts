import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, surname, email, phone, message } = await request.json();

    const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 465;

    // Διαμόρφωση του transporter με τα στοιχεία του παρόχου email σου
    // ΣΗΜΑΝΤΙΚΟ: Χρησιμοποίησε environment variables για ασφάλεια!
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // π.χ., 'smtp.gmail.com'
      port: port,
      // `secure: true` χρησιμοποιείται συνήθως με τη θύρα 465.
      // Για τη θύρα 587, το `secure` είναι `false` καθώς η σύνδεση αναβαθμίζεται σε ασφαλή μέσω STARTTLS.
      secure: port === 465, 
      auth: {
        user: process.env.EMAIL_USER, // το email σου
        pass: process.env.EMAIL_PASS, // ο κωδικός σου ή ένας app-specific password
      },
      // Πρόσθετη ρύθμιση για self-signed certificates σε development (αν χρειαστεί)
      // tls: { rejectUnauthorized: process.env.NODE_ENV === 'production' }
    });

    // Επιλογές του email
    const mailOptions = {
      from: `"${name} ${surname}" <${process.env.EMAIL_USER}>`, // αποστολέας
      to: 'info@verticalproject.gr', // παραλήπτης
      replyTo: email,
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`, // Θέμα
      html: `
        <h1>Νέο Μήνυμα Επικοινωνίας</h1>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Επίθετο:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone}</p>
        <hr />
        <h2>Μήνυμα:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Αποστολή του email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.' }, { status: 500 });
  }
}