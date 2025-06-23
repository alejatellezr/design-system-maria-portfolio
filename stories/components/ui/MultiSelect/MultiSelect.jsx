// MultiSelect.jsx
import React, { useState, useEffect, useRef } from "react";
import Chip from "./../Chip/Chip";
import "./_multiselect.scss";
import * as TablerIcons from "@tabler/icons-react";

const MultiSelect = ({
  label,
  placeholder,
  options = [],
  selected = [],
  onChange,
  status = "default",
  disabled = false,
  orientation = "column", // updated: applies to label-input layout
  name,
  id,
  message = "",
}) => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const IconTriangle = TablerIcons["IconTriangleInvertedFilled"];
  const IconXboxX = TablerIcons["IconXboxX"];
  const IconInfoCircleFilled = TablerIcons["IconInfoCircleFilled"];

  const computedStatus = disabled
    ? "--disabled"
    : status === "default" && focused
    ? "--active"
    : status;

  const handleSelect = (option) => {
    if (disabled || selected.includes(option)) return;
    onChange?.([...selected, option]);
    setInput("");
  };

  const handleRemove = (option) => {
    if (disabled) return;
    onChange?.(selected.filter((item) => item !== option));
  };

  const filteredOptions = options.filter(
    (opt) =>
      !selected.includes(opt) && opt.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      ref={ref}
      className={`x-multiselect 
        x-multiselect--${computedStatus} 
        x-multiselect--${orientation} 
        ${focused ? "x-multiselect--active" : ""} 
        ${disabled ? "x-multiselect--disabled" : ""}`}
    >
      {label && (
        <label
          htmlFor={id || name}
          className="x-multiselect__label x-font-16-bold"
        >
          {label}
        </label>
      )}
      <div className="x-multiselect__container">
        <div
          className={`x-multiselect__input-wrapper`}
          onClick={() => !disabled && setFocused(true)}
        >
          {selected.map((item) => (
            <Chip
              key={item}
              label={item}
              onRemove={() => handleRemove(item)}
              disabled={disabled}
            />
          ))}

          <input
            type="text"
            className="x-multiselect__input x-font-16"
            placeholder={placeholder}
            value={input}
            disabled={disabled}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
          />
          {IconTriangle && (
            <IconTriangle className={`x-multiselect__arrow`} />
          )}
        </div>

        {focused && (
          <ul className="x-multiselect__dropdown">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="x-multiselect__option x-font-16"
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="x-multiselect__option x-multiselect__option--disabled x-font-16">
                No options available
              </li>
            )}
          </ul>
        )}

        {(status === "error" || status === "informative") && message &&  (
          <div
            className={`x-multiselect__message x-font-14 x-multiselect__message--${status}`}
          >
            {status === "error" && 
            (<IconXboxX stroke={2} />)}
            {status === "informative" && (
              <IconInfoCircleFilled stroke={2} />
            )}
            <span>{message}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default MultiSelect;
