import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaTelegram, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaEnvelope />, href: 'mailto:aminmonajati9@gmail.com', label: t('contact.email_aria') },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/amin-monajati', label: t('contact.linkedin_aria') },
    { icon: <FaGithub />, href: 'https://github.com/MRAmin0', label: t('contact.github_aria') },
    { icon: <FaTelegram />, href: 'https://t.me/amk8320', label: t('contact.telegram_aria') },
    { icon: <FaDiscord />, href: 'https://discordapp.com/users/872238492401434624', label: t('contact.discord_aria') },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/amin.m8320/', label: t('contact.instagram_aria') },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-6 ${t('font')}`}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-gray-700 dark:text-gray-300 mb-12 ${t('font')}`}
        >
          {t('contact.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full glass hover:glass-strong hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center text-2xl transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`mt-16 pt-8 border-t border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 ${t('font')}`}
        >
          {t('footer.rights')}
        </motion.footer>
      </div>
    </section>
  );
}
