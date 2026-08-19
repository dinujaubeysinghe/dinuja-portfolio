import React from 'react'
import { motion } from 'framer-motion'
import ScrollToTop from '../components/ScrollToTop'
import { desc } from 'framer-motion/client'
import Atlas from '../assets/certificates/atlas.webp'
import PHP from '../assets/certificates/php.webp'

const certifications = [
    {
        title: 'Getting Started with MongoDB Atlas',
        company: 'MongoDB University',
        image: Atlas,
        href: 'https://learn.mongodb.com/c/gXiGj1yqT0eDRjRWaZT7Gg',
        alt: 'MongoDB Atlas Certification',
        description: 'Learned how MongoDB structures data as documents and collections, and how it maintains consistency and automatic failover as a distributed, cloud-based database-as-a-service. Gained hands-on experience deploying an Atlas cluster, loading a sample dataset, and querying documents through the Atlas UI.',
    },
    {
        title: 'Connecting to MongoDB in PHP',
        company: 'MongoDB University',
        image: PHP,
        href: 'https://learn.mongodb.com/c/moyrJBd3T_KOM8JOXjw6IQ',
        alt: 'MongoDB PHP Certification',
        description: 'Covers setting up MongoDB in a PHP environment — installing the driver via PECL, adding the MongoDB library through Composer, and troubleshooting common connection issues.',
    }
]

const Education = () => {
    return (
        <div>
            <ScrollToTop />
            <div className="flex flex-col items-center mt-36 px-4 md:px-6">
                <motion.h2
                    className="text-5xl md:text-7xl font-bold text-center"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My Academic
                </motion.h2>
                <motion.h2
                    className="text-5xl md:text-7xl font-bold text-center mt-2 text-white/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.06 }}
                >
                    Journey
                </motion.h2>
                <motion.p className="text-base md:text-lg text-white/70 mt-6 text-center max-w-2xl"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                >
                    Building a strong foundation in technology through rigorous study and hands on project experience.
                </motion.p>
            </div>

            <div className='mt-12 px-4 md:px-10 max-w-5xl mx-auto w-full'>
                <fieldset className='border border-white/50 rounded-3xl p-6 md:p-8 mb-12'>
                    <legend className="text-sm md:text-md font-main font-bold text-white mb-4 px-3 rounded-full">2024 - Present</legend>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className='text-2xl md:text-3xl font-bold mb-2'>
                            Bachelor of Science (Hons) in Information Technology
                        </h3>
                        <div className='text-white/70 font-main mt-1 mb-4 text-sm'>
                            Sri Lanka Institute of Information Technology <span className="px-2">• SLIIT</span>
                        </div>

                        <div className='border-white/10 my-4'>
                            <hr />
                        </div>

                        <p className='text-white/70 font-main text-sm leading-relaxed'>
                            Pursuing a Bachelor of Science (Honours) in Information Technology with a strong focus on web development, database systems, networking, and project management. Gaining hands on experience through academic and personal projects while continuously developing technical and problem solving skills.
                        </p>

                        <div className='text-white font-main text-md font-bold mt-6'>
                            Key Areas of Study
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
                            <div className='flex gap-4 flex-col'>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>Web Development</div>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>IT Project Management</div>
                            </div>
                            <div className='flex gap-4 flex-col'>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>UI/UX Design </div>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>Responsive Web Design</div>
                            </div>
                            <div className='flex gap-4 flex-col'>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>Database Management Systems</div>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>Component Based Development</div>
                            </div>
                            <div className='flex gap-4 flex-col'>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>Mobile Application Development</div>
                                <div className='w-full border border-white/10 rounded-lg px-4 py-2 text-md text-white/70'>Network Management</div>
                            </div>
                        </div>

                        <div className='border-white/10 my-6'>
                            <hr />
                        </div>

                        <div className='text-white font-main text-md font-bold mt-2'>Technologies</div>
                        <motion.div className="mt-4"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.06 }}
                        >
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">React.js</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">JavaScript</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">PHP</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Tailwind CSS</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Node.js</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Express.js</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Laravel</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Spring Boot</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">MongoDB</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">MySQL</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Git &amp; GitHub</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">Figma</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </fieldset>

                <fieldset className='border border-white/50 rounded-3xl p-6 md:p-8 mb-12'>
                    <legend className="text-sm md:text-md font-main font-bold text-white mb-4 px-3 rounded-full">Certifications</legend>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={cert.href}
                                    className="text-white rounded-2xl"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: 0.08 * i }}
                                >
                                    <div className="rounded-2xl w-full overflow-hidden">
                                        <a href={cert.href} rel="noopener noreferrer" target="_blank">
                                            <img src={cert.image} alt={cert.alt} className="rounded-2xl h-auto w-full object-contain hover:scale-105 transition-transform duration-500" />
                                        </a>
                                    </div>
                                    <div className="text-white mt-4 text-lg font-main pl-3">
                                        {cert.title}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        <span className="inline-flex items-center px-3 py-1 text-sm text-white/70">
                                            {cert.description}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </fieldset>
            </div>
        </div>
    )
}

export default Education