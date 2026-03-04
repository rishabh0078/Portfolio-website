import { memo } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiCheck } from "react-icons/fi";
import { personalInfo, certificates } from "../data/portfolio";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

function About() {
    return (
        <section id="about" className="about section" aria-label="About section">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.p className="section-label" variants={fadeUp}>
                        {"// 01. about me"}
                    </motion.p>
                    <motion.h2 className="section-heading" variants={fadeUp}>
                        About Me
                    </motion.h2>
                    <motion.div
                        className="section-line"
                        variants={{
                            hidden: { width: 0 },
                            visible: {
                                width: 60,
                                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                            },
                        }}
                    />
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.p variants={fadeUp}>
                            I&apos;m a Full-Stack Web Developer based in {personalInfo.location},
                            currently pursuing B.Tech in Computer Science Engineering (Cyber
                            Security) at Galgotias University, graduating in 2026.
                        </motion.p>
                        <motion.p variants={fadeUp}>
                            I specialize in building scalable web applications using React.js,
                            Node.js, Express.js and MongoDB. I&apos;ve contributed to
                            production-level systems during my internship at Napps Technology,
                            where I worked on the SilverPos Restaurant Management System.
                        </motion.p>
                        <motion.p variants={fadeUp}>
                            When I&apos;m not coding, I&apos;m exploring new technologies,
                            solving DSA problems, and looking for my next freelance challenge
                            on Fiverr.
                        </motion.p>

                        <motion.div
                            className="about-contact-grid"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <motion.div className="about-contact-card" variants={fadeUp}>
                                <FiMail className="card-icon" style={{ color: "var(--accent)" }} />
                                <div>
                                    <div className="about-contact-label">Email</div>
                                    <div className="about-contact-value">{personalInfo.email}</div>
                                </div>
                            </motion.div>
                            <motion.div className="about-contact-card" variants={fadeUp}>
                                <FiMapPin className="card-icon" style={{ color: "var(--accent)" }} />
                                <div>
                                    <div className="about-contact-label">Location</div>
                                    <div className="about-contact-value">{personalInfo.location}</div>
                                </div>
                            </motion.div>
                            <motion.div className="about-contact-card" variants={fadeUp}>
                                <FiPhone className="card-icon" style={{ color: "var(--accent)" }} />
                                <div>
                                    <div className="about-contact-label">Phone</div>
                                    <div className="about-contact-value">{personalInfo.phone}</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-right-cards"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <motion.div className="about-card" variants={fadeUp}>
                            <div className="about-card-header">
                                <span className="about-card-dot" />
                                <span className="about-card-title">Currently</span>
                            </div>
                            <div className="about-card-item">🎓 Final year B.Tech CSE</div>
                            <div className="about-card-item">💼 Open to freelance &amp; internships</div>
                            <div className="about-card-item">📍 {personalInfo.location}</div>
                        </motion.div>

                        <motion.div className="about-card" variants={fadeUp}>
                            <div className="about-card-header">
                                <span className="about-card-dot" />
                                <span className="about-card-title">Certifications</span>
                            </div>
                            {certificates.map((cert) => (
                                <div key={cert.id} className="cert-item">
                                    <FiCheck className="cert-check" />
                                    {cert.title}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default memo(About);
