import React from "react";
import profile from "../assets/profile.jpg";

import {
    FaReact,
    FaLaravel,
    FaGitAlt,
    FaNodeJs,
    FaGithub,
    FaHtml5,
} from "react-icons/fa";

import {
    SiMysql,
    SiPhp,
    SiJavascript,
    SiTypescript,
    SiDocker,
    SiMongodb,
    SiFirebase,

} from "react-icons/si";

export default function About() {
    return (
        <section id="about" className="sp-section sp-about">
            <div className="sp-eyebrow sp-mono">ABOUT ME</div>

            <div className="sp-about-grid">

                {/* LEFT */}
                <div className="sp-about-image">

                    <div className="profile-ring">

                        <div className="profile-circle">
                            <img src={profile} alt="Seema Parwin" />
                        </div>

                        <div className="floating-icon top-right">
                            <FaHtml5 />
                        </div>

                        <div className="floating-icon bottom-left">
                            <FaReact />
                        </div>

                        <div className="floating-icon top-left">
                            <FaLaravel />
                        </div>

                        <div className="floating-icon bottom-right">
                            <FaGithub />
                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div>

                    <div className="sp-about-text">
                        <p>
                            Hi, I'm <strong>Seema Parwin</strong>, an
                            <strong> Associate Full Stack Developer</strong> with professional
                            experience building scalable web applications using
                            <strong> Laravel, React.js, PHP, JavaScript, MySQL, HTML</strong>
                            and <strong>CSS</strong>.
                        </p>

                        <p>
                            I have developed enterprise applications including
                            <strong> CRM Systems</strong>,
                            <strong> E-Wallet Applications</strong>,
                            <strong> Portfolio Websites</strong>, and custom business
                            management solutions. I also deploy and maintain live
                            applications using <strong>cPanel</strong> and
                            <strong> Hostinger</strong>.
                        </p>

                        <p>
                            I enjoy solving real-world problems through clean,
                            maintainable code and continuously learning modern
                            technologies to build secure, responsive, and user-friendly
                            applications.
                        </p>
                    </div>



                </div>

            </div>

            <div className="sp-meta-grid">

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Role</span>
                    <span className="sp-meta-val">Associate Full Stack Developer</span>
                </div>

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Experience</span>
                    <span className="sp-meta-val">1+ Year</span>
                </div>

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Frontend</span>
                    <span className="sp-meta-val">React • HTML • CSS • JS</span>
                </div>

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Backend</span>
                    <span className="sp-meta-val">Laravel • PHP • MySQL</span>
                </div>

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Deployment</span>
                    <span className="sp-meta-val">cPanel • Hostinger</span>
                </div>

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Projects</span>
                    <span className="sp-meta-val">
                        CRM • E-Wallet • Home Service
                    </span>
                </div>

                <div className="sp-meta-card">
                    <span className="sp-meta-key">Location</span>
                    <span className="sp-meta-val">Sri Lanka</span>
                </div>

                <div className="sp-meta-card active">
                    <span className="sp-meta-key">Status</span>
                    <span className="sp-meta-val">Open to Work</span>
                </div>

            </div>
        </section>
    );
}