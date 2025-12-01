import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = t('dir');
    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const navLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong shadow-2xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Amin Monajati
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label={t('nav.lang_toggle_aria')}
            >
              <span className="text-sm font-bold">
                {i18n.language === 'fa' ? 'EN' : 'FA'}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label={t('nav.theme_toggle_aria')}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center"
              aria-label={t('nav.menu_toggle_aria')}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
