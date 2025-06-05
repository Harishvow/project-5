import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'sql intermediate',
    issuer: 'HackerRank',
    issuedDate: '2025',
    url: 'https://www.hackerrank.com/certificates/09b911dea5ec',
    image: 'https://images.pexels.com/photos/32422954/pexels-photo-32422954.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    issuedDate: '2025',
    url: 'https://www.hackerrank.com/certificates/1e5bf2df89df',
    image: '/certificates/problem-solving-basic.png',
  },
  // Add more certificates if needed
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-500 mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              className="block rounded-xl overflow-hidden shadow-md bg-white dark:bg-secondary-800 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-600">{cert.issuer}</p>
                <p className="text-xs text-secondary-500 mt-1">Issued: {cert.issuedDate}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
