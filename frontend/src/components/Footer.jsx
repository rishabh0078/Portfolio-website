import { memo } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo, navLinks } from "../data/portfolio";

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="nav-logo" aria-label="Home">
                            <span className="nav-logo-cursor" />
                            RC
                        </a>
                        <p>Designed &amp; built by {personalInfo.name}</p>
                    </div>

                    <nav className="footer-nav" aria-label="Footer navigation">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="footer-link">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="footer-socials">
                        <a
                            href={personalInfo.github}
                            className="footer-social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub size={18} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            className="footer-social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
