// RadioButton.jsx
import React from 'react';
import './_radioButton.scss';

const RadioButton = ({
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  label = '',
  labelPosition,
}) => {
  return (
    <label className={`x-radio ${disabled ? 'x-radio--disabled' : ''}`}>
      {label && labelPosition === 'left' && (
        <span className="x-radio--label x-font-16">{label}</span>
      )}

      <input
        type="radio"
        className="x-radio--input"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
      <span className="x-radio--custom" />

      {label && labelPosition === 'right' && (
        <span className="x-radio--label x-font-16">{label}</span>
      )}
    </label>
  );
};

export default RadioButton;
