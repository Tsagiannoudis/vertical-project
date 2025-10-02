import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;

const ContactWithUs = () => {
    return (
        <section className="w-full mx-auto p-8 bg-[#fff]">
            <div className="container mx-auto max-w-5xl mb-8 pt-10">
                <h2 className="text-3xl font-semibold text-black mb-8">Επικοινωνήστε μαζί μας</h2>
                <p className="text-gray-600 mt-2 mb-4">Μπορείτε να μας βρείτε μέσω των Social Media ή να συμπληρώσετε την παρακάτω φόρμα επικοινωνίας και θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                <div className="text-black space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:info@verticalproject.gr" className="text-black hover:underline">info@verticalproject.gr</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+306973025103" className="text-black hover:underline">6973025103</a></p>
                    <p><strong>Social Media:</strong></p>
                        <a href="https://www.facebook.com/share/19vGdeV63y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-black hover:underline ml-2">
                            <span className="w-8 h-8 inline-block">
                                {facebookIcon}
                            </span>
                        </a>
                        <a href="https://www.instagram.com/verticalproject_trainings?igsh=MTR5anV0em5mbjh0cA%3D%3D&utm_source=qrfacebook.com/share/19vGdeV63y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-black hover:underline ml-2">
                            <span className="w-8 h-8 inline-block">
                                {instagramIcon}
                            </span>
                        </a>                       
                </div>
            </div>
        </section>
    )
}
export default ContactWithUs;