// CheckboxGroup.jsx
import React from 'react';
import Checkbox from './../Checkbox/Checkbox';
import './_checkboxGroup.scss';
import './../Checkbox/_checkbox.scss';

const CheckboxGroup = ({
  options = [],
  values = [],
  onChange,
  disabled = false,
  labelPosition = 'right',
  orientation = 'column', // default
}) => {
  const handleToggle = (val) => {
    const newValues = values.includes(val)
      ? values.filter((v) => v !== val)
      : [...values, val];
    onChange?.(newValues);
  };

  return (
    <div className={`x-checkbox-group x-checkbox-group--${orientation}`}>
      {options.map(({ label, value }) => (
        <Checkbox
          key={value}
          label={label}
          checked={values.includes(value)}
          onChange={() => handleToggle(value)}
          disabled={disabled}
          labelPosition={labelPosition}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
