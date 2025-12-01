import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      image: '/legacy_backup/static/images/Weatherly.png',
      title: t('portfolio.weatherly.title'),
      desc: t('portfolio.weatherly.desc'),
      tech: 'Flutter, Dart, OpenWeatherMap API',
      links: {
        demo: 'https://weatherylapp.netlify.app/',
        github: 'https://github.com/MRAmin0/Weatherly',
      },
    },
    {
      image: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=File+Scanner',
      title: t('portfolio.file_scanner.title'),
      desc: t('portfolio.file_scanner.desc'),
      tech: 'Python, Hashing',
      links: {
        github: 'https://github.com/MRAmin0/Duplicate-File-Scanner',
      },
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${t('font')}`}
        >
          {t('portfolio.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${t('font')}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-300 mb-4 ${t('font')}`}>
                  {project.desc}
                </p>
                <p className="text-sm text-gray-400 mb-4">{project.tech}</p>

                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors ${t('font')}`}
                    >
                      <FaExternalLinkAlt />
                      {t('portfolio.view_online')}
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors ${t('font')}`}
                  >
                    <FaGithub />
                    {t('portfolio.github')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
