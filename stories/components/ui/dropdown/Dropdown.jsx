import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./_dropdown.scss";

const Dropdown = ({
  label,
  options,
  selected,
  status,
  direction,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === selected);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div
      className={`x-dropdown x-dropdown--${status} ${status === "hover" ? "x-dropdown--hover" : ""} ${isOpen ? "x-dropdown--active" : ""} ${status === "disabled" ? "x-dropdown--disabled" : ""} x-dropdown--${direction}`}
    >
      <label className="x-dropdown__label">{label}</label>
      <div className="x-dropdown__toggleContainer">
        <div
          className={`x-dropdown__toggle`}
          onClick={() => status !== "disabled" && setIsOpen(!isOpen)}
        >
          <span className={`x-dropdown__select`}>
            {selectedOption?.label || "Select..."}
          </span>
          <IconTriangleInvertedFilled
            className={`x-dropdown__arrow`}
          />
        </div>
        {isOpen && (
          <ul className="x-dropdown__menu">
            {options.map((opt) => (
              <li
                key={opt.value}
                className={`x-dropdown__option ${
                  selected === opt.value ? "x-dropdown--option__active" : ""
                }`}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.string,
  status: PropTypes.oneOf(["default", "hover", "disabled","active"]),
  style: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
  onChange: PropTypes.func,
};
