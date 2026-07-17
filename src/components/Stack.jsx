import React from "react";
import { STACK_LAYERS } from "../data";

export default function Stack() {
  return (
    <section id="stack" className="sp-section sp-section-tight">
      <div className="sp-eyebrow sp-mono">tech stack</div>
      <h2 className="sp-display" style={{ fontSize: "clamp(26px,3.4vw,36px)", margin: "0 0 30px" }}>
        Built in layers, top to bottom
      </h2>
      <div className="sp-stack-tower">
        {STACK_LAYERS.map((layer) => {
          const Icon = layer.icon;
          return (
            <div className="sp-layer" key={layer.key}>
              <div className="sp-layer-head">
                <div className="sp-layer-icon">
                  <Icon size={16} />
                </div>
                <span className="sp-layer-label sp-mono">{layer.label}</span>
              </div>
              <div className="sp-chip-row">
                {layer.items.map((it) => (
                  <span className="sp-chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}