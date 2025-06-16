// Switch.jsx
import React from 'react';
import './_switch.scss';

const Switch = ({ checked = false,
  onChange,
  disabled = false,
  label = '',
  labelPosition = 'right',
 }) => {
  return (
    <label className={`x-switch ${disabled ? 'x-switch--disabled' : ''}`}>
    {label && labelPosition === 'left' && (
        <span className="x-switch--label x-font-16">{label}</span>
      )}
      <input
        type="checkbox"
        className="x-switch--input"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className="x-switch--slider" />
      {label && labelPosition === 'right' && (
        <span className="x-switch--label x-font-16">{label}</span>
      )}
    </label>
  );
};

export default Switch;
