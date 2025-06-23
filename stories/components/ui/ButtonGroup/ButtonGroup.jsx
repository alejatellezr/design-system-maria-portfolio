 // ButtonGroup.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './../Button/Button';
import './_buttonGroup.scss';
export const ButtonGroup = ({ buttons, orientation = 'horizontal', className = '', ...props }) => {
  return (
    <div
      className={`x-button-group x-button-group--${orientation} ${className}`}
      role="group"
      {...props}
    >
      {buttons.map((buttonProps, index) => (
        <Button key={index} {...buttonProps} />
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    iconName: PropTypes.string,
    iconStroke: PropTypes.number,
    iconOnly: PropTypes.bool,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    style: PropTypes.oneOf(['solid', 'outline', 'flat']),
    status: PropTypes.oneOf(['default', 'hover', 'disabled']),
    className: PropTypes.string,
  })).isRequired,
  orientation: PropTypes.oneOf(['row', 'column']),
  className: PropTypes.string,
};
