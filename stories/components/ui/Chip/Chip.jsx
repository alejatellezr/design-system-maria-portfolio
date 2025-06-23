// Chip.jsx
import React from 'react';
import { Button } from "./../../ui/Button/Button";
import './_chip.scss';

const Chip = ({ label, onRemove, disabled = false }) => (
  <span className={`x-chip ${disabled ? 'x-chip--disabled' : ''} x-font-16`}>
    {label}
    {!disabled && (
      <Button
              className="x-chip__close "
              iconName="IconX"
              iconOnly={true}
              style="flat"
              status="default"
              onClick={onRemove}
            ></Button>
    )}
  </span>
);

export default Chip;
