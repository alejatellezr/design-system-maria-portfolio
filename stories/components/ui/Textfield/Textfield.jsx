// Textfield.jsx
import React, { useState } from "react";
import * as TablerIcons from "@tabler/icons-react";
import './_textfield.scss';

const Textfield = ({
  label,
  placeholder = "",
  value,
  onChange,
  status = "default", // 'default' | 'active' | 'disabled' | 'error' | 'informative'
  disabled = false,
  name,
  id,
  orientation = "column", // 'row' | 'column'
  message = "",
}) => {
  const IconXboxX = TablerIcons["IconXboxX"];
  const IconInfoCircleFilled = TablerIcons["IconInfoCircleFilled"];

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (!disabled) setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const computedStatus = disabled
    ? "disabled"
    : status === "default" && isFocused
    ? "active"
    : status;

  return (
    <div className={`x-textfield 
    x-textfield--${computedStatus}
    x-textfield--${orientation} `}>
      {label && <label htmlFor={id || name} className="x-textfield__label x-font-16-bold">{label}</label>}
      <input
        className="x-textfield__input x-font-16"
        type="text"
        id={id || name}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {(status === "error" || status === "informative") && message && (
        <div
          className={`x-textfield__message x-font-14 x-textfield__message--${status}`}
        >
          {status === "error" && <IconXboxX stroke={2} />}
          {status === "informative" && <IconInfoCircleFilled stroke={2} />}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default Textfield;
