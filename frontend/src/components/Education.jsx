import { memo } from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolio";

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

function Education() {
    return (
        <section
            id="education"
            className="education-section section"
            aria-label="Education section"
        >
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.p className="section-label" variants={fadeUp}>
                        {"// 05. education"}
                    </motion.p>
                    <motion.h2 className="section-heading" variants={fadeUp}>
                        Education
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
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            style={{ position: "relative" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                        >
                            <div className="timeline-dot" />
                            <motion.div
                                className="edu-card"
                                whileHover={{
                                    borderColor: "rgba(79,142,247,0.3)",
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <h3 className="edu-institution">{edu.institution}</h3>
                                <p className="edu-degree">{edu.degree}</p>
                                {edu.specialization && (
                                    <p className="edu-specialization">{edu.specialization}</p>
                                )}
                                <div className="edu-meta">
                                    <span className="edu-meta-badge">{edu.duration}</span>
                                    {edu.location && (
                                        <span className="edu-meta-badge">{edu.location}</span>
                                    )}
                                </div>
                                {edu.grade && <div className="edu-grade">{edu.grade}</div>}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Education);
