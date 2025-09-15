import Link from "next/link";
import Image from "next/image";

export default function FooterPage() {
  return (
    <footer className="bg-white text-black shadow-md w-11/12 lg:w-3/5 max-w-7xl align-center mx-auto rounded-2xl mt-6 p-4">
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-black mb-4">Γρήγοροι σύνδεσμοι</h4>
            <ul className="space-y-2 text-sm inline-block text-left">
              <li>
                <Link href="/courses" className="hover:underline">
                  Εκπαιδευτικά
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:underline">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:underline">
                  Σχετικά Με Εμάς
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: subscribe newsletter*/}
          <div className="md:col-span-2 text-center">
            <form
              action=""
              method="get"
              className="flex flex-col items-center"
            >
              <Image
                src="/logo-black-vertical.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <h2 className="font-semibold text-black mb-4">
                Εγγραφή στο Newsletter
              </h2>
              <div className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="email.."
                  className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F2E94E]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#F2E94E] text-black p-2 rounded-r-md hover: bg-opacity-90 transition-colors"
                >
                  Αποστολή
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-black mb-4">Ακολουθήστε μας</h4>
            <div className="flex justify-center space-x-4 text-sm md:justify-end">
              <ul className="text-left">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Vertical Project. All rights reserved.
            Powered by tSagian Projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
