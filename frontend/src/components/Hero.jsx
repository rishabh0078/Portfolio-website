import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease },
    },
};

function Hero() {
    return (
        <section className="hero" aria-label="Hero section">
            {/* Decorative elements */}
            <div className="hero-glow-1" />
            <div className="hero-glow-2" />
            <div className="hero-dots" />

            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p className="hero-label" variants={fadeUp}>
                        {"// full-stack web developer"}
                    </motion.p>

                    <motion.h1 className="hero-name" variants={fadeUp}>
                        {personalInfo.name.split(" ")[0]}
                        <span className="hero-name-last">
                            {personalInfo.name.split(" ").slice(1).join(" ")}
                        </span>
                    </motion.h1>

                    <motion.p className="hero-tagline" variants={fadeUp}>
                        {personalInfo.tagline}
                    </motion.p>


                    <motion.div className="hero-buttons" variants={fadeUp}>
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </motion.div>

                    <motion.div className="hero-socials" variants={fadeUp}>
                        <a
                            href={personalInfo.github}
                            className="hero-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <FiGithub className="social-icon" size={16} />
                            GitHub
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            className="hero-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <FiLinkedin className="social-icon" size={16} />
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="hero-social-link"
                            aria-label="Send Email"
                        >
                            <FiMail className="social-icon" size={16} />
                            Email
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <span>scroll</span>
                <FiChevronDown className="scroll-arrow" size={16} />
            </motion.div>
        </section>
    );
}

export default Hero;
