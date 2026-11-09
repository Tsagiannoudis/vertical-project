"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function FooterPage() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Εκπαιδευτικά", href: "/courses" },
    { label: "Events & Workshops", href: "/events" },
    { label: "Σχετικά με Εμάς", href: "/aboutUs" },
    { label: "Οι απόφοιτοι μας", href: "/certified-instructors" },
    { label: "Επικοινωνία", href: "/contact" },
  ];

  return (
    <footer className="w-11/12 lg:w-4/5 max-w-7xl mx-auto mt-16 mb-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lg text-neutral-800">
      <div className="px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Bio (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-black-vertical.svg"
                alt="Vertical Project Logo"
                width={85}
                height={85}
                className="w-auto h-16 object-contain"
              />
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mb-6">
              Εκπαιδευτικά προγράμματα, εξειδικευμένα σεμινάρια και
              πιστοποιήσεις Aerial Yoga & Movement. Εξερευνήστε τη δυναμική της
              κίνησης με ασφάλεια και έμπνευση.
            </p>

            {/* Social Media Pills */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/19vGdeV63y/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#3c3c3c] text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-sm" />
              </a>
              <a
                href="https://www.instagram.com/verticalproject_trainings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#3c3c3c] text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col 6-8) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Πλοήγηση
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-neutral-600 hover:text-black hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter (Col 9-12) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Newsletter
            </h4>
            <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
              Εγγραφείτε για να μαθαίνετε πρώτοι για νέα workshops, σεμινάρια
              και ημερομηνίες εκπαιδεύσεων.
            </p>

            {/* Modern Integrated Pill Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center"
            >
              <div className="w-full flex items-center bg-neutral-100 rounded-full p-1.5 border border-neutral-200/60 focus-within:border-neutral-900 focus-within:bg-white transition-all">
                <input
                  type="email"
                  placeholder="Το email σας..."
                  required
                  className="w-full bg-transparent px-3 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#F2E94E] hover:bg-[#3c3c3c] hover:text-white text-black text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
                >
                  Εγγραφή
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>© {currentYear} Vertical Project. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <Link
              href="https://www.tsagiannoudis.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-black font-medium transition-colors"
            >
              tSagian Projects
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
