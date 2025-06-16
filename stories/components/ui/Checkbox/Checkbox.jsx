// Checkbox.jsx
import React from 'react';
import './_checkbox.scss';

const Checkbox = ({
  checked = false,
  onChange,
  disabled = false,
  label = '',
  labelPosition = 'right',
}) => {
  return (
    <label className={`x-checkbox ${disabled ? 'x-checkbox--disabled' : ''} x-checkbox--label-${labelPosition}`}>
      {label && labelPosition === 'left' && (
        <span className="x-checkbox--label x-font-16">{label}</span>
      )}

      <input
        type="checkbox"
        className="x-checkbox--input"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className="x-checkbox--custom" />

      {label && labelPosition === 'right' && (
        <span className="x-checkbox--label x-font-16">{label}</span>
      )}
    </label>
  );
};

export default Checkbox;
