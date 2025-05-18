import React from 'react';
import * as TablerIcons from '@tabler/icons-react';
import PropTypes from 'prop-types';

import './_button.scss';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  style = 'solid',
  backgroundColor = null,
  size = 'medium',
  label,
  iconName = null,
  iconSize = 20,
  iconStroke = 2,
  iconColor = 'currentColor',
  iconPosition = 'left',
  ...props
}) => {
  const mode = `x-button x-button--${style}`;

  const Icon = iconName ? TablerIcons[iconName] : null;

  return (
    <button
      type="button"
      className={['x-button x-button--solid', `x-button x-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
      <Icon size={iconSize} color={iconColor} stroke={iconStroke} />
    )}
      {label}
      {Icon && iconPosition === 'right' && (
      <Icon size={iconSize} color={iconColor} stroke={iconStroke} />
    )}
    </button>
  );
};
