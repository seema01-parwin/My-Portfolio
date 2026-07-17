import React from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import {
    Mail,
    Home,
    User,
    Layers,
    FolderGit2,
    Phone,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="sp-footer">

            <div className="sp-footer-content">

                {/* Brand */}
                <div className="sp-footer-brand">

                    <div className="sp-footer-logo">
                        SP<span>.</span>dev
                    </div>

                    <p>
                        Associate Full Stack Developer building secure,
                        scalable, and responsive web applications.
                    </p>

                </div>


                {/* Quick Links */}
                <div className="sp-footer-links">

                    <div className="sp-footer-nav">

                        <a href="#home">
                            <Home size={15} />
                            Home
                        </a>

                        <a href="#about">
                            <User size={15} />
                            About
                        </a>

                        <a href="#stack">
                            <Layers size={15} />
                            Stack
                        </a>

                        <a href="#systems">
                            <FolderGit2 size={15} />
                            Projects
                        </a>

                        <a href="#contact">
                            <Phone size={15} />
                            Contact
                        </a>

                    </div>

                </div>



                {/* Social */}
                <div className="sp-footer-social">

                    <a
                        href="https://github.com/seema01-parwin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubIcon size={18} />
                    </a>


                    <a
                        href="https://www.linkedin.com/in/seema-parwin-81851a305/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedinIcon size={18} />
                    </a>


                    <a href="mailto:sheema2374@gmail.com">
                        <Mail size={18} />
                    </a>

                </div>

            </div>


            {/* Bottom */}
            <div className="sp-footer-bottom">

                    © {new Date().getFullYear()} Seema Parwin. All rights reserved.

                

            </div>

        </footer>
    );
}