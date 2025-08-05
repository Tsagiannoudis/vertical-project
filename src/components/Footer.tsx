import Link from "next/link";
import Image from "next/image";

export default function FooterPage() {
  return (
    <footer className="bg-white text-black shadow-md w-3/4 align-center mx-auto rounded-2xl mt-6 p-4">
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Γρήγοροι σύνδεσμοι</h4>
            <ul className="space-y-2 text-sm">
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
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              {/* You can create an /about page later */}
              {/* <li><Link href="/about" className="hover:underline">About Us</Link></li> */}
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#daac7f]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#D4CBC2] text-black p-2 rounded-r-md hover: bg-opacity-90 transition-colors"
                >
                  Αποστολή
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="font-semibold text-black mb-4">Ακολουθήστε μας</h4>
            <div className="flex space-x-4 text-sm">
              <ul>
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
