
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-transform duration-300">
      <nav
        className={`flex items-center transition-all duration-300 ${
          hasScrolled
            ? 'bg-card/80 backdrop-blur-lg rounded-full shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <ul className="flex items-center space-x-2 px-3 py-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full transition-colors duration-300 text-sm font-medium"
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
