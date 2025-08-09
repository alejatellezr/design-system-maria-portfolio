import React, { useState } from "react";
import "./_fonts.scss";
import Dropdown from "../../ui/dropdown/Dropdown";

const fontSamples = [
  { label: "Title", className: "x-font-title", tag: "h1" },
  { label: "Subtitle", className: "x-font-subtitle", tag: "h2" },
  { label: "Text 16 Regular", className: "x-font-16", tag: "p" },
  { label: "Text 16 Bold", className: "x-font-16-bold", tag: "p" },
  { label: "Text 16 Italic", className: "x-font-16-italic", tag: "p" },
  { label: "Secondary Text 14 Regular", className: "x-font-14", tag: "p" },
  { label: "Secondary Text 14 Bold", className: "x-font-14-bold", tag: "p" },
  { label: "Note", className: "x-font-note", tag: "p" },
  { label: "Third Title 18 Regular", className: "x-font-18", tag: "h3" },
  { label: "Text Graph", className: "x-font-graph", tag: "span" },
];

export default function FontPreview() {
  const [selectedFont, setSelectedFont] = useState(fontSamples[0]);

  const Tag = selectedFont.tag;
  const defaultText = `ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Curabitur vehicula tortor nec purus fermentum, in cursus odio euismod. 
Donec fringilla metus nec sapien tincidunt, nec facilisis ligula vulputate.`;

  const [text, setText] = useState(defaultText);

  // Dropdown configuration
  const dropdownConfig = {
    label: "Font Style",
    selected: selectedFont.className,
    options: fontSamples.map((font) => ({
      value: font.className,
      label: font.label,
    })),
    status: "default",
    direction: "row",
    style: "solid",
  };

  const handleFontChange = (value) => {
    const chosenFont = fontSamples.find((f) => f.className === value);
    if (chosenFont) {
      setSelectedFont(chosenFont);
    }
  };

  return (
    <section className="x-font">
      <article className="x-font__header">
        <Tag className={selectedFont.className}>
          {selectedFont.tag} Tag -{selectedFont.label}
        </Tag>
        <Dropdown
          label={dropdownConfig.label}
          selected={dropdownConfig.selected}
          options={dropdownConfig.options}
          status={dropdownConfig.status}
          style={dropdownConfig.style}
          direction={dropdownConfig.direction}
          onChange={handleFontChange}
          className="x-font__dropdown"
        />        
      </article>

      <article className="x-font__preview">
        

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${selectedFont.className} x-font__textarea`}
        />
      </article>
    </section>
  );
}
