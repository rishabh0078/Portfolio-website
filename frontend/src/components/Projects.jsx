import { memo } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";

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

const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

function Projects() {
    return (
        <section
            id="projects"
            className="projects-section section"
            aria-label="Projects section"
        >
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.p className="section-label" variants={fadeUp}>
                        {"// 04. projects"}
                    </motion.p>
                    <motion.h2 className="section-heading" variants={fadeUp}>
                        Featured Projects
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
                    <motion.p className="section-subtext" variants={fadeUp}>
                        Things I&apos;ve built
                    </motion.p>
                </motion.div>

                {projects
                    .filter((p) => p.featured)
                    .map((project, idx) => {
                        const isReversed = idx % 2 !== 0;
                        return (
                            <motion.div
                                key={project.id}
                                className={`project-card${isReversed ? " reverse" : ""}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={stagger}
                            >
                                <motion.div variants={isReversed ? slideRight : slideLeft}>
                                    <p className="project-number">{project.number}</p>
                                    <p className="project-featured-label">Featured Project</p>
                                    <h3 className="project-title">{project.title}</h3>

                                    <div className="project-desc-box">
                                        <p className="project-desc-text">{project.description}</p>
                                    </div>

                                    <div className="project-tech-row">
                                        {project.tech.map((t) => (
                                            <span key={t} className="project-tech-item">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                className="project-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} code on GitHub`}
                                            >
                                                <FiGithub size={16} />
                                                Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                className="project-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} live demo`}
                                            >
                                                <FiExternalLink size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={isReversed ? slideLeft : slideRight}
                                >
                                    <motion.div
                                        className="project-visual"
                                        whileHover={{
                                            borderColor: "rgba(79,142,247,0.4)",
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        <div className="project-visual-bar">
                                            <span className="dot-red" />
                                            <span className="dot-yellow" />
                                            <span className="dot-green" />
                                        </div>
                                        <div className="project-visual-content">
                                            <div className="project-visual-title">
                                                {project.title}
                                            </div>
                                            <div className="project-visual-code">
                                                {">"} <span>npx create-app</span> {project.tech[0].toLowerCase()}
                                                <br />
                                                <span>✔</span> Built with{" "}
                                                {project.tech.slice(0, 3).join(", ")}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
            </div>
        </section>
    );
}

export default memo(Projects);
