import { memo } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

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

function Contact() {
    return (
        <section
            id="contact"
            className="contact-section section"
            aria-label="Contact section"
        >
            <div className="container">
                <motion.div
                    className="contact-inner"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.p className="section-label" variants={fadeUp}>
                        {"// 06. contact"}
                    </motion.p>
                    <motion.h2 className="section-heading" variants={fadeUp}>
                        Get In Touch
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

                    <motion.p className="contact-subtext" variants={fadeUp}>
                        I&apos;m currently open to freelance opportunities and full-time
                        roles. Whether you have a project in mind or just want to say hi —
                        my inbox is always open.
                    </motion.p>

                    <motion.div variants={fadeUp}>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="contact-cta"
                            aria-label="Send email to Rishabh"
                        >
                            Say Hello
                        </a>
                    </motion.div>

                    <motion.div
                        className="contact-cards"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div
                            className="contact-card"
                            variants={fadeUp}
                            whileHover={{
                                borderColor: "var(--accent)",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="contact-card-icon">
                                <FiMail size={20} />
                            </div>
                            <div className="contact-card-label">Email</div>
                            <div className="contact-card-value">
                                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            variants={fadeUp}
                            whileHover={{
                                borderColor: "var(--accent)",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="contact-card-icon">
                                <FiPhone size={20} />
                            </div>
                            <div className="contact-card-label">Phone</div>
                            <div className="contact-card-value">{personalInfo.phone}</div>
                        </motion.div>

                        <motion.div
                            className="contact-card"
                            variants={fadeUp}
                            whileHover={{
                                borderColor: "var(--accent)",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="contact-card-icon">
                                <FiMapPin size={20} />
                            </div>
                            <div className="contact-card-label">Based In</div>
                            <div className="contact-card-value">{personalInfo.location}</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default memo(Contact);
