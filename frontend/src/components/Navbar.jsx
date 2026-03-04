import { useState, useEffect, useCallback } from "react";
import { personalInfo, navLinks } from "../data/portfolio";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: "-30% 0px -60% 0px" }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleNavClick = useCallback(
        (e, href) => {
            e.preventDefault();
            setMenuOpen(false);
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        },
        []
    );

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
            <div className="navbar-inner">
                <a href="#" className="nav-logo" aria-label="Home">
                    <span className="nav-logo-cursor" />
                    RC
                </a>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`nav-link${activeSection === link.href.replace("#", "") ? " active" : ""}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="nav-right">
                    {personalInfo.availableForWork && (
                        <div className="available-badge">
                            <span className="available-dot" />
                            Available for work
                        </div>
                    )}
                    <a
                        href={personalInfo.resumeLink}
                        className="resume-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Resume"
                    >
                        Resume
                    </a>
                    <button
                        className={`hamburger${menuOpen ? " open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`nav-link${activeSection === link.href.replace("#", "") ? " active" : ""}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
                {personalInfo.availableForWork && (
                    <div className="available-badge" style={{ marginTop: 16 }}>
                        <span className="available-dot" />
                        Available for work
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
