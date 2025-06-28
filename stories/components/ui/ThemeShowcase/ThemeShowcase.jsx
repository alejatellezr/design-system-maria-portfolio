import React from "react";
import { Button } from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Textfield from "../Textfield/Textfield";
import Switch from "../Switch/Switch";
import { BroadcastMessage } from "../BroadcastMessage/BroadcastMessage";
import { useDarkMode } from "storybook-dark-mode";
import "./_themeShowcase.scss";

/**
 * Theme Showcase component to demonstrate dark/light mode switching
 */
export const ThemeShowcase = () => {
  const isDark = useDarkMode();

  return (
    <div className="x-theme-showcase">
      <div className="x-theme-showcase__header">
        <h1 className="x-font-title">
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>
        <p className="x-font-16">
          Use the dark mode toggle in the Storybook toolbar to switch themes.
        </p>
      </div>

      <div className="x-theme-showcase__section">
        <h2 className="x-font-subtitle">Buttons</h2>
        <div className="x-theme-showcase__group">
          <Button label="Solid Button" style="solid" />
          <Button label="Outline Button" style="outline" />
          <Button label="Flat Button" style="flat" />
          <Button label="Disabled" style="solid" status="disabled" />
        </div>
      </div>

      <div className="x-theme-showcase__section">
        <h2 className="x-font-subtitle">Form Elements</h2>
        <div className="x-theme-showcase__group">
          <Textfield
            label="Text Input"
            placeholder="Enter text..."
            layout="column"
          />
          <Checkbox label="Checkbox option" />
          <Switch label="Toggle switch" />
        </div>
      </div>

      <div className="x-theme-showcase__section">
        <h2 className="x-font-subtitle">Messages</h2>
        <div className="x-theme-showcase__group">
          <BroadcastMessage
            title="Information"
            text="This is an informational message."
            type="neutral"
            showCloseButton={false}
          />
          <BroadcastMessage
            title="Success"
            text="Operation completed successfully."
            type="success"
            showCloseButton={false}
          />
          <BroadcastMessage
            title="Warning"
            text="Please check your inputs."
            type="warning"
            showCloseButton={false}
          />
          <BroadcastMessage
            title="Error"
            text="Something went wrong."
            type="error"
            showCloseButton={false}
          />
        </div>
      </div>

      <div className="x-theme-showcase__section">
        <h2 className="x-font-subtitle">Color Palette</h2>
        <div className="x-theme-showcase__colors">
          <div className="x-theme-showcase__color-item">
            <div className="x-theme-showcase__color-swatch x-theme-showcase__color-swatch--primary"></div>
            <span>Primary Surface</span>
          </div>
          <div className="x-theme-showcase__color-item">
            <div className="x-theme-showcase__color-swatch x-theme-showcase__color-swatch--secondary"></div>
            <span>Secondary Surface</span>
          </div>
          <div className="x-theme-showcase__color-item">
            <div className="x-theme-showcase__color-swatch x-theme-showcase__color-swatch--fourth"></div>
            <span>Fourth Surface</span>
          </div>
          <div className="x-theme-showcase__color-item">
            <div className="x-theme-showcase__color-swatch x-theme-showcase__color-swatch--highlight"></div>
            <span>Highlight</span>
          </div>
        </div>
      </div>
    </div>
  );
};
