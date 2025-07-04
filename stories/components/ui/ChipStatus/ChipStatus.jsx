// Chip.jsx
import React from "react";
import "./_chipStatus.scss";

const ChipStatus = ({ label, type }) => (
  <p className={`x-chip-status x-chip-status--${type} x-font-16`}>
    <span className="x-chip-status__label">{label}</span>
  </p>
);

export default ChipStatus;
