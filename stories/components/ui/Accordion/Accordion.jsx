import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./_accordion.scss";

/** Primary UI component for user interaction */
export const Accordion = ({
  label,
  status,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <section
      className={`x-accordion x-accordion--${status} 
      ${
        status === "hover" ? "x-accordion--hover" : ""
      } 
      ${status === "disabled" ? "x-accordion--disabled" : ""}`}
    >
      <label className="x-accordion__label">{label}</label>
      <IconTriangleInvertedFilled
            className={`x-accordion__arrow`}
          />
    </section>
  );
};

Accordion.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string,
  status: PropTypes.oneOf(["default", "hover", "disabled"]),
  onChange: PropTypes.func,
};
