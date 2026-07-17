import React from "react";
import { SYSTEMS } from "../data";

export default function Systems() {
  return (
    <section id="systems" className="sp-section sp-projects">
      <div className="sp-eyebrow sp-mono">systems deployed</div>
      <h2 className="sp-display" style={{ fontSize: "clamp(26px,3.4vw,36px)", margin: "0 0 30px" }}>
        What I've shipped
      </h2>
      <div className="sp-systems-grid">
        {SYSTEMS.map((s) => (
          <div className="sp-card" key={s.id}>
            <div className="sp-card-bar">
              <div className="sp-card-bar-dots">
                <span className="sp-dot" style={{ background: "#E86A6A" }} />
                <span className="sp-dot" style={{ background: "#E8A23D" }} />
                <span className="sp-dot" style={{ background: "#6FE7B7" }} />
              </div>
              <span className="sp-card-status">● {s.status}</span>
            </div>
            <div className="sp-card-body">
              <span className="sp-card-id">{s.id}</span>
              <h3 className="sp-card-title">{s.name}</h3>
              <p className="sp-card-desc">{s.desc}</p>
              <div className="sp-chip-row">
                {s.tags.map((t) => (
                  <span className="sp-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}