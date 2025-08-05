export default function FormContact() {
    return (
        <section className="w-full mx-auto p-8 bg-[#F3F3F3]">
            <div className="container mx-auto max-w-5xl mb-8 pt-10">
                <h2 className="text-3xl font-semibold text-black">The Vertical Projects Training</h2>
                <p className="text-gray-600 mt-2 mb-4">Μπορείτε να μας βρείτε μεσω των Social Media ή διαφορετικα με την παρακάτω φόρμα επικοινωνίας.</p>
                <table>
                    <tbody>
                        <tr>
                            <td className="w-1/3 text-gray-700 font-medium">Email:</td>
                            <td className="text-gray-600">info@verticalprojects.gr</td>
                        </tr>
                        <tr>
                            <td className="w-1/3 text-gray-700 font-medium">Phone:</td>
                            <td className="text-gray-600">6980123456</td>
                        </tr>
                    </tbody>
                </table>   
                <p className="text-gray-600 mt-4 mb-4">Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.</p>  
            </div>

            <div className="container mx-auto max-w-5xl p-8">
                
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* First Name */}
                        <div>
                            <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">Όνομα</label>
                            <input type="text" id="name" name="name" required className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"/>
                        </div>
                        {/* Last Name */}
                        <div>
                            <label htmlFor="surname" className="block text-md font-medium text-gray-700 mb-2">Επίθετο</label>
                            <input type="text" id="surname" name="surname" required className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"/>
                        </div>
                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-md font-medium text-gray-700 mb-2">Τηλέφωνο</label>
                            <input type="tel" id="phone" name="phone" required className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"/>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">Μήνυμα</label>
                        <textarea id="message" name="message" rows={4} required className="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2 focus:border-black text-black"></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="px-6 py-3 bg-[#D4CBC2] text-black font-semibold rounded-md hover:bg-[#b9b1a9] focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-ss-2xl rounded-br-2xl w-1/4">
                            Αποστολή
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}