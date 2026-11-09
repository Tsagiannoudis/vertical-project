"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Detect scroll for dynamic micro-shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Αρχική", href: "/" },
    { label: "Εκπαιδευτικά", href: "/courses" },
    { label: "Events", href: "/events" },
    { label: "Σχετικά με εμάς", href: "/aboutUs" },
    { label: "Οι απόφοιτοι μας", href: "/certified-instructors" },
  ];

  return (
    <>
      {/* Mobile Backdrop Blur Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-4 left-0 right-0 z-50 w-11/12 lg:w-4/5 max-w-7xl mx-auto rounded-3xl transition-all duration-300 backdrop-blur-md text-neutral-900 ${
          isMenuOpen
            ? "bg-white shadow-2xl border border-neutral-200 max-h-[calc(100dvh-2rem)] overflow-y-auto"
            : isScrolled
              ? "bg-white/95 shadow-lg border border-neutral-200/80 py-1"
              : "bg-white/90 shadow-md border border-neutral-200/50 py-1.5"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-2">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="shrink-0 flex items-center"
          >
            <Image
              src="/logo-black-vertical.svg"
              alt="Vertical Project Logo"
              width={75}
              height={75}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-neutral-900 text-white shadow-xs font-semibold"
                        : "text-neutral-600 hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full font-bold text-xs tracking-wider text-black bg-[#F2E94E] hover:bg-[#3c3c3c] hover:text-white transition-all duration-300 shadow-xs cursor-pointer"
            >
              Επικοινωνία
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Hamburger
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-5 border-t border-neutral-100">
            <ul className="flex flex-col gap-1.5 text-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#F2E94E] text-black font-bold shadow-xs"
                          : "text-neutral-800 hover:bg-neutral-100 font-medium"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile Contact Button */}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full py-3.5 rounded-2xl font-bold text-xs tracking-wider text-black bg-[#F2E94E] hover:bg-[#3c3c3c] hover:text-white transition-colors shadow-xs"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
