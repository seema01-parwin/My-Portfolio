import React from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="sp-section sp-contact">

      <div className="sp-contact-box">

        <div 
          className="sp-eyebrow sp-mono"
          style={{ justifyContent: "center" }}
        >
          CONTACT
        </div>

        <h2 className="sp-contact-title sp-display">
          Let's build something.
        </h2>

        <p className="sp-contact-sub">
          Open to full-stack opportunities, freelance projects, and
          collaborations focused on building modern web applications.
        </p>


        <div className="sp-contact-links">

          <a
            className="sp-icon-link"
            href="https://github.com/seema01-parwin"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={15} />
            GitHub
          </a>


          <a
            className="sp-icon-link"
            href="https://www.linkedin.com/in/seema-parwin-81851a305/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>


          <a
            className="sp-icon-link"
            href="mailto:sheema2374@gmail.com"
          >
            <Mail size={15} />
            Email
          </a>


          <a
            className="sp-icon-link"
            href="https://wa.me/94752272861"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={15} />
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}