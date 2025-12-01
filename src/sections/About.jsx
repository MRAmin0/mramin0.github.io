import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${t('font')}`}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              src="images/IMG-614.jpg"
              alt={t('about.avatar_alt')}
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
            />
            <p className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${t('font')}`}>
              {t('about.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
