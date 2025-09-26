import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  surname,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Νέο Μήνυμα Επικοινωνίας από το Vertical Project</h1>
    <p>
      Έλαβες ένα νέο μήνυμα από τη φόρμα επικοινωνίας του site.
    </p>
    <hr />
    <h2>Λεπτομέρειες Αποστολέα:</h2>
    <ul>
      <li>
        <strong>Όνομα:</strong> {name} {surname}
      </li>
      <li>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </li>
      {phone && (
        <li>
          <strong>Τηλέφωνο:</strong> {phone}
        </li>
      )}
    </ul>
    <hr />
    <h2>Μήνυμα:</h2>
    <p>{message.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
  </div>
);

export default ContactFormEmail;