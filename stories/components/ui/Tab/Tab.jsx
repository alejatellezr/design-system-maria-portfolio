// Tab.jsx
import React from "react";
import "./_tab.scss";

const Tab = ({
  label,
  isActive,
  onClick,
  disabled = false,
  direction = 'row',
}) => {
  return (
    <button
      className={`x-tab ${isActive ? "x-tab--active" : "x-tab--default"} ${
        disabled ? "x-tab--disabled" : ""
      } x-tab--${direction} x-font-16`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Tab;
