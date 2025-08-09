import React from "react";
import "./_colors.scss";

const colors = [
  { name: "--color-primary", value: "var(--color-primary)" },
  { name: "--color-secondary", value: "var(--color-secondary)" },
  { name: "--color-disabled", value: "var(--color-disabled)" },
  { name: "--color-highlight", value: "var(--color-highlight)" },
];

const surface = [
  { name: "--surface-primary", value: "var(--surface-primary)" },
  { name: "--surface-secondary", value: "var(--surface-secondary)" },
  { name: "--surface-third", value: "var(--surface-third)" },
  { name: "--surface-fourth", value: "var(--surface-fourth)" },
  { name: "--surface-fifth", value: "var(--surface-fifth)" },
  { name: "--surface-dialog-mask", value: "var(--surface-dialog-mask)" },
];

export default function Colors() {
  return (
    <section className="x-colors">
      <h1 className="x-colors__title x-font-title">Colors</h1>
      <p className="x-colors__description x-font-16">
        The color palette used in the design system, including primary,
        secondary, and surface colors.
      </p>

      <article className="x-colors__row">
        <h2 className="x-colors__subtitle x-font-subtitle">Main Colors</h2>
        <div className="x-colors__pallete">
          {colors.map((color) => (
            <div key={color.name} className="x-colors__item">
              <div
                className="x-colors__swatch"
                style={{ backgroundColor: color.value }}
              />
              <div className="x-colors__info">
                <span className="x-colors__name x-font-16-bold">
                  {color.name}
                </span>
                <span className="x-colors__value x-font-16">{color.value}</span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="x-colors__subtitle x-font-subtitle">Surfcace Colors</h2>
        <div className="x-colors__pallete">
          {surface.map((color) => (
            <div key={color.name} className="x-colors__item">
              <div
                className="x-colors__swatch"
                style={{ backgroundColor: color.value }}
              />
              <div className="x-colors__info">
                <span className="x-colors__name x-font-16-bold">
                  {color.name}
                </span>
                <span className="x-colors__value x-font-16">{color.value}</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
