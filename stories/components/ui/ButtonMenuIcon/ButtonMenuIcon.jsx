import React from "react";
import * as TablerIcons from "@tabler/icons-react";
import PropTypes from "prop-types";

import "./_buttonMenuIcon.scss";

/** Primary UI component for user interaction */
export const ButtonMenuIcon = ({
  primary,
  style = "primary",
  label,
  status = "default",
  iconName = "IconBellFilled",
  iconImage = "https://i0.wp.com/www.mariaalejandratellez.com/wp-content/uploads/2025/04/maria-alejandra-tellez-portfolio-image.jpg",
  iconStroke = 2,
  iconColor = "currentColor",
  visualOnly = "icon",
  className = "",
  ...props
}) => {
  const Icon = iconName ? TablerIcons[iconName] : null;
  if (!Icon) {
    console.warn(`Tabler icon "${iconName}" not found.`);
  }
  const IconSize = 24;

  const showIcon = iconName && (visualOnly === "icon" || !visualOnly);
  const showImage = iconImage && (visualOnly === "image" || !visualOnly);
  const accessibilityLabel = visualOnly
    ? iconName || iconImage || "menu-icon"
    : undefined;

  const renderVisual = () => {
    if (showImage && !showIcon) {
      return (
        <img
          src={iconImage}
          alt=""
          width={IconSize}
          height={IconSize}
          className="x-button-menu__image"
          aria-hidden="true"
        />
      );
    }

    if (showIcon && !showImage) {
      return (
        <Icon
          size={IconSize}
          color={iconColor}
          stroke={iconStroke}
          className="x-button-menu__icon"
        />
      );
    }

    return null;
  };

  return (
    <button
      type="button"
      className={`x-button-menu x-button-menu__${style} 
        ${status === "hover" ? "x-button-menu--hover" : ""} 
        ${status === "active" ? "x-button-menu--active" : ""} 
        ${status === "disabled" ? "x-button-menu--disabled" : ""} 
        ${className}`}
      disabled={status === "disabled"}
      aria-label={accessibilityLabel}
      {...props}
    >
      {renderVisual()}

      {(style === "secondary" || style === "tertiary") && label && (
        <span className="x-button-menu__label x-font-16">{label}</span>
      )}
    </button>
  );
};

ButtonMenuIcon.propTypes = {
  primary: PropTypes.bool,
  status: PropTypes.oneOf(["default", "hover", "disabled", "active"]),
  style: PropTypes.oneOf(["primary", "secondary"]),
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconImage: PropTypes.string,
  iconStroke: PropTypes.number,
  visualOnly: PropTypes.oneOf(["icon", "image"]),
  className: PropTypes.string,
};
