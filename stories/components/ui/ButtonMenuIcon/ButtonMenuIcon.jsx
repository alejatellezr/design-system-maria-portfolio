import React from "react";
import * as TablerIcons from "@tabler/icons-react";
import PropTypes from "prop-types";

import "./_buttonMenuIcon.scss";

/** Primary UI component for user interaction */
export const ButtonMenuIcon = ({
  primary,
  style = "solid",
  label,
  status = "default",
  iconName = "IconBellFilled",
  iconImage = "https://i0.wp.com/www.mariaalejandratellez.com/wp-content/uploads/2025/04/maria-alejandra-tellez-portfolio-image.jpg",
  iconStroke = 2,
  iconColor = "currentColor",
  iconPosition = "left",
  visualOnly = "icon",
  className = "",
  ...props
}) => {
  const Icon = iconName ? TablerIcons[iconName] : null;
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
          className="x-button-menu-icon__image"
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
          className="x-button-menu-icon__icon"
        />
      );
    }

    return null;
  };

  return (
    <button
      type="button"
      className={`x-button-menu-icon x-button-menu-icon__${style} 
        ${status === "hover" ? "x-button-menu-icon--hover" : ""} 
        ${status === "active" ? "x-button-menu-icon--active" : ""} 
        ${status === "disabled" ? "x-button-menu-icon--disabled" : ""} 
        ${className}`}
      disabled={status === "disabled"}
      aria-label={accessibilityLabel}
      {...props}
    >
      {iconPosition === "left" && renderVisual()}

      {visualOnly === null && label && (
        <span className="x-button-menu-icon__label x-font-14">{label}</span>
      )}

      {iconPosition === "right" && renderVisual()}
    </button>
  );
};

ButtonMenuIcon.propTypes = {
  primary: PropTypes.bool,
  status: PropTypes.oneOf(["default", "hover", "disabled", "active"]),
  style: PropTypes.oneOf(["solid", "outline", "flat"]),
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconImage: PropTypes.string,
  iconStroke: PropTypes.number,
  visualOnly: PropTypes.oneOf(["icon", "image"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
};
