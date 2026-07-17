import React, { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTypedText } from "../hooks/useTypedText";
import { scrollToSection } from "../utils";

function useParticles(count = 24) {
    return useMemo(() => {
        return Array.from({ length: count }).map((_, i) => {
            const size = Math.random() * 3 + 1.5;       // 1.5px - 4.5px
            const left = Math.random() * 100;            // %
            const duration = Math.random() * 10 + 10;    // 10s - 20s
            const delay = Math.random() * 12;            // 0s - 12s stagger
            const drift = (Math.random() * 60 - 30).toFixed(0) + "px";
            const glow = i % 5 === 0; // every 5th particle glows a bit

            return {
                id: i,
                style: {
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                    "--drift": drift,
                    opacity: glow ? 0.8 : 0.5,
                },
                glow,
            };
        });
    }, [count]);
}

export default function Hero() {
    const typed = useTypedText("Seema Parwin", 70, 400);
    const particles = useParticles(26);

    return (
        <section id="home" className="sp-section sp-hero">
            {/* Ambient glow blobs */}
            <div className="sp-hero-glow" aria-hidden="true">
                <span className="sp-glow-blob sp-glow-blob-1" />
                <span className="sp-glow-blob sp-glow-blob-2" />
                <span className="sp-glow-blob sp-glow-blob-3" />
            </div>

            {/* Animated background particles */}
            <div className="sp-particles" aria-hidden="true">
                {particles.map((p) => (
                    <span
                        key={p.id}
                        className={`sp-particle${p.glow ? " sp-particle-glow" : ""}`}
                        style={p.style}
                    />
                ))}
            </div>



            <div className="sp-hero-grid">
                <div>
                    <div className="sp-terminal-line sp-mono">
                        <span className="prompt">$</span> whoami
                    </div>

                    <h1 className="sp-hero-name sp-display1">
                        {typed}
                        <span className="sp-caret" />
                    </h1>

                    <p className="sp-hero-role">
                        <strong>Associate Full Stack Developer</strong> <br /> Laravel · React.js · PHP · JavaScript · MySQL
                    </p>

                    <p className="sp-hero-desc">
                        Passionate about building secure, scalable, and responsive web applications.
                        Experienced in developing <strong>CRM Systems</strong>,
                        <strong> E-Wallet Applications</strong>, <strong>Portfolio Websites</strong>,
                        and custom business solutions using modern full-stack technologies.
                    </p>

                    <div className="sp-cta-row">
                        <button
                            className="sp-btn sp-btn-primary"
                            onClick={() => scrollToSection("systems")}
                        >
                            View Projects <ArrowUpRight size={15} />
                        </button>

                        <a
                            className="sp-btn sp-btn-ghost"
                            href="/cv/Seema Parwin.pdf"
                            download
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="sp-diagram-wrap">
                    <div className="sp-diagram-card">
                        <div className="sp-diagram-header">
                            <span className="sp-dot" style={{ background: "#E86A6A" }} />
                            <span className="sp-dot" style={{ background: "#E8A23D" }} />
                            <span className="sp-dot" style={{ background: "#6fb9e7" }} />
                            <span style={{ marginLeft: 6 }}>architecture.svg</span>
                        </div>
                        <svg viewBox="0 0 380 260" width="100%" height="auto">
                            <line x1="70" y1="45" x2="290" y2="130" stroke="#24344A" strokeWidth="1.5" />
                            <line x1="70" y1="130" x2="290" y2="130" stroke="#24344A" strokeWidth="1.5" />
                            <line x1="70" y1="215" x2="290" y2="130" stroke="#24344A" strokeWidth="1.5" />

                            <circle cx="150" cy="75" r="3.5" fill="#6fd1e7" className="sp-pulse" />
                            <circle cx="150" cy="130" r="3.5" fill="#6fd1e7" className="sp-pulse" style={{ animationDelay: "0.4s" }} />
                            <circle cx="150" cy="183" r="3.5" fill="#6fd1e7" className="sp-pulse" style={{ animationDelay: "0.8s" }} />

                            <rect x="20" y="28" width="100" height="34" fill="#16223A" stroke="#24344A" />
                            <text x="70" y="49" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#EDEAE0">FRONTEND</text>

                            <rect x="20" y="113" width="100" height="34" fill="#16223A" stroke="#24344A" />
                            <text x="70" y="134" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#EDEAE0">BACKEND</text>

                            <rect x="20" y="198" width="100" height="34" fill="#16223A" stroke="#24344A" />
                            <text x="70" y="219" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#EDEAE0">DATABASE</text>

                            <rect x="260" y="105" width="100" height="50" fill="#6fb7e7" />
                            <text x="310" y="126" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="12" fill="#06251A">FULL</text>
                            <text x="310" y="142" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="12" fill="#06251A">STACK</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}