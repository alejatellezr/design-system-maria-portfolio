import * as TablerIcons from '@tabler/icons-react';
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./_link.scss"; // optional: your custom styles

export const Link = ({
  href,
  label,
  iconName = 'IconStar',
  iconPosition,
  isExternal = false,
  className = "",
  status,
  ...props
}) => {
  const Icon = iconName ? TablerIcons[iconName] : 'IconStar';

  const classes = `x-link ${className} x-font-16 x-link--${status}`.trim();

  const content = (
    <>
      {iconPosition === "left" && Icon && (
        <Icon className="x-link__icon x-link--icon-left" size={16} stroke={2} />
      )}
      <span className='x-link__text'>{label}</span>
      {iconPosition === "right" && Icon && (
        <Icon className="x-link__icon x-link--icon-right" size={16} stroke={2} />
      )}
    </>
  );

  return isExternal ? (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {content}
    </a>
  ) : (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right", "none"]),
  isExternal: PropTypes.bool,
  className: PropTypes.string,
  status: PropTypes.oneOf(["default", "hover", "disabled"])
};
