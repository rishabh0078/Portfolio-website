import { memo } from "react";
import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

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

function Experience() {
    return (
        <section
            id="experience"
            className="experience-section section"
            aria-label="Experience section"
        >
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.p className="section-label" variants={fadeUp}>
                        {"// 03. experience"}
                    </motion.p>
                    <motion.h2 className="section-heading" variants={fadeUp}>
                        Work Experience
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

                <div className="timeline">
                    {experience.map((exp) => (
                        <motion.div
                            key={exp.id}
                            style={{ position: "relative" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                        >
                            <div className="timeline-dot" />
                            <motion.div
                                className="exp-card"
                                whileHover={{
                                    y: -2,
                                    borderColor: "rgba(79,142,247,0.3)",
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className="exp-header">
                                    <div>
                                        <h3 className="exp-company">{exp.company}</h3>
                                        <p className="exp-role">{exp.role}</p>
                                    </div>
                                    <div className="exp-badges">
                                        <span className="exp-badge">{exp.duration}</span>
                                        <span className="exp-badge">{exp.type}</span>
                                    </div>
                                </div>

                                <div className="exp-description">
                                    {exp.description.map((point, idx) => (
                                        <div key={idx} className="exp-point">
                                            <span className="exp-arrow">›</span>
                                            <span className="exp-point-text">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="exp-tech">
                                    <span className="exp-tech-label">Tech used:</span>
                                    {exp.tech.map((t) => (
                                        <span key={t} className="exp-tech-tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Experience);
