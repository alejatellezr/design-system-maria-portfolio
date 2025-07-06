import React, { useEffect, useRef } from "react";
import "./_checkbox.scss";

const Checkbox = (args) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      setIsChecked(args.checked);
    }
  }, [args.checked]);

  return (
    <label
      className={`x-checkbox ${
        args.disabled ? "x-checkbox--disabled" : ""
      } x-checkbox--label-${args.labelPosition}`}
    >
      {args.label && args.labelPosition === "left" && (
        <span className="x-checkbox__label x-font-16">{args.label}</span>
      )}

      <input type="checkbox" className="x-checkbox__input" {...args} />
      <span
        className={`x-checkbox__custom ${
          args.indeterminate ? "is-indeterminate" : ""
        }`}
      />

      {args.label && args.labelPosition === "right" && (
        <span className="x-checkbox__label x-font-16">{args.label}</span>
      )}
    </label>
  );
};

export default Checkbox;