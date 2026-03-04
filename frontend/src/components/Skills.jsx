import { memo } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

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

const categoryConfig = [
    { key: "languages", label: "Languages", icon: "💻" },
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "databases", label: "Databases", icon: "🗄️" },
    { key: "tools", label: "Tools", icon: "🛠️" },
    { key: "concepts", label: "Core Concepts", icon: "🧠" },
];

function Skills() {
    return (
        <section id="skills" className="skills-section section" aria-label="Skills section">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.p className="section-label" variants={fadeUp}>
                        {"// 02. skills"}
                    </motion.p>
                    <motion.h2 className="section-heading" variants={fadeUp}>
                        Technical Skills
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

                <motion.div
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    {categoryConfig.map((cat) => (
                        <motion.div
                            key={cat.key}
                            className="skill-card"
                            variants={fadeUp}
                            whileHover={{
                                y: -4,
                                borderColor: "rgba(79,142,247,0.4)",
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className="skill-category">
                                <span className="skill-category-icon">{cat.icon}</span>
                                {cat.label}
                            </div>
                            <div className="skill-tags">
                                {skills[cat.key]?.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default memo(Skills);
