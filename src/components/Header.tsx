
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (lastScrollY < currentScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        className={`flex items-center transition-all duration-300 ${
          hasScrolled
            ? 'bg-card/80 backdrop-blur-lg rounded-full shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <ul className="flex items-center space-x-3 px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.name} className="story-link">
              <a
                href={link.href}
                className="relative inline-block px-5 py-3 text-foreground text-base font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
