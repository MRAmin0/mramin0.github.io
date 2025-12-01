import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
      title: t('skills.languages'),
      items: ['Dart', 'Flutter', 'JavaScript', 'Python', 'Java'],
    },
    {
      icon: <FaPaintBrush className="text-4xl mb-4 text-purple-500" />,
      title: t('skills.uiux'),
      items: ['Material Design', 'Custom Widgets', 'Animations', 'Responsive Design', 'Cupertino'],
    },
    {
      icon: <FaTools className="text-4xl mb-4 text-pink-500" />,
      title: t('skills.tools'),
      items: ['VS Code', 'Android Studio', 'Firebase', 'Git & GitHub', 'REST APIs'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${t('font')}`}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-3xl p-8 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              {category.icon}
              <h3 className={`text-2xl font-bold mb-6 ${t('font')}`}>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
