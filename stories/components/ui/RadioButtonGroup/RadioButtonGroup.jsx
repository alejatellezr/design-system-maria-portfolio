import React from 'react';
import RadioButton from './../RadioButton/RadioButton';
import './_radioButtonGroup.scss';
import './../RadioButton/_radioButton.scss';

const RadioButtonGroup = ({
  name,
  options = [],
  value,
  onChange,
  disabled = false,
  labelPosition = 'right',
  orientation = 'column', // default
}) => {
  return (
    <div className={`x-radio-group x-radio-group--${orientation}`}>
      {options.map(({ label, value: val }) => (
        <RadioButton
          key={val}
          name={name}
          label={label}
          value={val}
          checked={value === val}
          onChange={onChange}
          disabled={disabled}
          labelPosition={labelPosition}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
