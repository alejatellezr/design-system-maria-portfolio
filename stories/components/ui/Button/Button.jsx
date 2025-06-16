import React from 'react';
import * as TablerIcons from '@tabler/icons-react';
import PropTypes from 'prop-types';

import './_button.scss';

/** Primary UI component for user interaction */
export const Button = ({
  primary,
  style = 'solid',
  label,
  status = 'default',
  iconName = null,
  iconStroke = 2,
  iconColor = 'currentColor',
  iconPosition = 'left',
  iconOnly = false,
  className = '',
  ...props
}) => {

  const Icon = iconName ? TablerIcons[iconName] : null;
  const IconSize = 20;
  
  return (
    <button
      type="button"
      className={`x-button x-button--${style} ${
        status === "hover" ? "--hover" : ""
      } ${className}`}
      disabled={status === "disabled"}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={IconSize} color={iconColor} stroke={iconStroke} />
      )}

      {!iconOnly && label && <span className="x-button__label">{label}</span>}

      {Icon && iconPosition === "right" && (
        <Icon size={IconSize} color={iconColor} stroke={iconStroke} />
      )}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  style: PropTypes.oneOf(['solid', 'outline', 'flat']),
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconStroke: PropTypes.number,
  iconOnly: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};
