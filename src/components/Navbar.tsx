'use client';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hamburger from './Hamburger';


const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Αρχική', href: '/' },
    { label: 'Εκπαιδευτικά', href: '/courses' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Blog', href: '/blog' }, 
    { label: 'Επικοινωνία', href: '/contact' },
  ];

  return (
    <header className="absolute top-6 left-0 right-0 z-10 w-11/12 lg:w-3/4 mx-auto rounded-2xl bg-white text-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
             <Image
              src="/logo-black-vertical.svg" 
              alt="Vertical Project Logo"  
              width={80} 
              height={80}
              priority />
        </Link>
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${pathname === link.href ? "text-[#daac7f]" : "hover:text-[#d4cbc2]"} transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${pathname === link.href ? "text-[#daac7f]" : "hover:text-[#d4cbc2]"} transition-colors text-lg`}
                  onClick={() => setIsMenuOpen(false)} // Κλείνει το μενού με το κλικ
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
