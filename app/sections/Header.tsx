'use client';

import Link from 'next/link';
import * as Scroll from 'react-scroll';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const LinkScroll = Scroll.Link;

interface NavLinkProps {
  title: string;
  closeMenu?: () => void;
}

const NavLink = ({ title, closeMenu }: NavLinkProps) => (
  <LinkScroll
    to={title.toLowerCase()}
    smooth={true}
    duration={500}
    offset={-80}
    spy={true}
    onClick={closeMenu}
    className="cursor-pointer text-white text-3xl lg:text-2xl px-4 py-2 hover:text-purple-400 transition-colors duration-200 max-lg:text-5xl max-lg:py-6 max-lg:block max-lg:text-center font-bold"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out
        bg-[#0d0a25]/60 backdrop-blur-md 
        ${isScrolled ? 'h-16' : 'h-20'}
      `}
    >
      <div className="flex items-center justify-between px-5 h-full">
        {/* Mobile Logo */}
        <Link href="/" className="lg:hidden cursor-pointer">
          <Image src="/logo.png" width={200} height={120} alt="Logo" className="mb-2" />
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={32} className="text-[#4e2cd6]" />
            ) : (
              <Menu size={32} className="text-[#4e2cd6]" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-full justify-center">
          <nav>
            <ul className="flex items-center space-x-8 text-white">
              <li className="flex items-center space-x-52">
                <NavLink title="Features" />
                <div className="dot w-1 h-1 bg-white rounded-full" />
                <NavLink title="Pricing" />
              </li>

              <li className="mx-8">
                <LinkScroll to="hero">
                  <Image src="/logo.png" width={200} height={55} alt="Logo" />
                </LinkScroll>
              </li>

              <li className="flex items-center space-x-52">
                <NavLink title="FAQ" />
                <div className="dot w-1 h-1 bg-white rounded-full" />
                <NavLink title="Reviews" />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-black text-white flex flex-col items-center py-10 gap-6 transition-all duration-300 z-40">
          <NavLink title="features" closeMenu={() => setMenuOpen(false)} />
          <NavLink title="pricing" closeMenu={() => setMenuOpen(false)} />
          <NavLink title="FAQ" closeMenu={() => setMenuOpen(false)} />
          <NavLink title="reviews" closeMenu={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
