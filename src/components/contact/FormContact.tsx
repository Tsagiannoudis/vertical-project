'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function FormContact() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: '' },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(prevStatus => ({ ...prevStatus, submitting: true, info: { error: false, msg: '' } }));

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    submitted: true,
                    submitting: false,
                    info: { error: false, msg: data.message },
                });
                // Καθαρισμός της φόρμας μετά την επιτυχή αποστολή
                setFormData({ name: '', surname: '', email: '', phone: '', message: '' });
            } else {
                throw new Error(data.message || 'Κάτι πήγε στραβά.');
            }
        } catch (error) { // Το error εδώ είναι τύπου 'unknown' από προεπιλογή
            // Ορίζουμε ένα προεπιλεγμένο μήνυμα σφάλματος
            let errorMessage = 'Προέκυψε ένα μη αναμενόμενο σφάλμα. Παρακαλώ δοκιμάστε ξανά.';
            // Ελέγχουμε αν το σφάλμα είναι μια κανονική περίπτωση Error
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: errorMessage },
            });
        }
    };

    return (
        <section className="w-full mx-auto p-8 bg-[#fff]">
            <div className="container mx-auto max-w-5xl mb-8 pt-10">
                <h2 className="text-3xl font-semibold text-black">The Vertical Project Training</h2>
                <p className="text-gray-600 mt-2 mb-4">Μπορείτε να μας βρείτε μεσω των Social Media ή διαφορετικα με την παρακάτω φόρμα επικοινωνίας.</p>
                <table>
                    <tbody>
                        <tr>
                            <td className="w-1/3 text-gray-700 font-medium">Email:</td>
                            <td className="text-gray-600">info@verticalproject.gr</td>
                        </tr>
                        <tr>
                            <td className="w-1/3 text-gray-700 font-medium">Phone:</td>
                            <td className="text-gray-600"> - </td>
                        </tr>
                                                <tr>
                            <td className="w-1/3 text-gray-700 font-medium">Viber:</td>
                            <td className="text-gray-600"> - </td>
                        </tr>
                    </tbody>
                </table>   
                <p className="text-gray-600 mt-4 mb-4">Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.</p>  
            </div>

            <div className="container mx-auto max-w-5xl p-8">
                
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* First Name */}
                        <div>
                            <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">Όνομα</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                                className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"
                            />
                        </div>
                        {/* Last Name */}
                        <div>
                            <label htmlFor="surname" className="block text-md font-medium text-gray-700 mb-2">Επίθετο</label>
                            <input 
                                type="text" 
                                id="surname" 
                                name="surname" 
                                value={formData.surname}
                                onChange={handleChange}
                                required 
                                className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-md font-medium text-gray-700 mb-2">Τηλέφωνο</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                                className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">Μήνυμα</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={4} 
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" disabled={status.submitting} className="w-full px-6 py-3 font-semibold text-black bg-[#F2E94E] rounded-md hover:bg-[#f0e631] focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-ss-2xl rounded-br-2xl md:w-1/4 disabled:bg-gray-400 disabled:cursor-not-allowed">
                            {status.submitting ? 'Αποστολή...' : 'Αποστολή'}
                        </button>
                    </div>
                </form>
                {status.info.msg && (
                    <div className={`mt-4 text-center p-2 rounded-md ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {status.info.msg}
                    </div>
                )}
            </div>
        </section>
    );
}