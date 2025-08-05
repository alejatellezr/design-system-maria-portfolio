import React from "react";
import PropTypes from "prop-types";

import "./_creativeThumbnail.scss";

export const CreativeThumbnail = ({
  direction = "row",
  viewport = "desktop",
  status = "default",
  CreativePosition = "1",
  creativeImagePath = "https://www.mariaalejandratellez.com/wp-content/uploads/2025/07/creative-image-portfolio-001.png",
  CreativeName = "Creative Name",
  CreativeCurrencyValue = "$",
  CreativeCurrencyAmount = "1000",
  onClick,
}) => {
  const creativeWidth = viewport === "desktop" ? "60px" : "100px";
  const creativeHeight = viewport === "desktop" ? "60px" : "80px";

  return (
    <div
      className={`x-creative-thumbnail x-creative-thumbnail--${direction} x-creative-thumbnail--${status} x-creative-thumbnail--${viewport}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <h4 className={`x-creative-thumbnail__position x-font-title`}>{CreativePosition}.</h4>
      <img
        className="x-creative-thumbnail__image"
        src={creativeImagePath}
        alt={CreativeName}
        loading="lazy"
        width={creativeWidth}
        height={creativeHeight}
      />
      <div className="x-creative-thumbnail__text-box">
      <h3 className="x-creative-thumbnail__name x-font-16-bold">{CreativeName}</h3>
      <p className="x-creative-thumbnail__currency x-font-16">
        <span className="x-creative-thumbnail__currency-value">
          {CreativeCurrencyValue}
        </span>
        <span className="x-creative-thumbnail__currency-amount">
          {CreativeCurrencyAmount}
        </span>
      </p>
      </div>
    </div>
  );
};

CreativeThumbnail.propTypes = {
  CreativePosition: PropTypes.string.isRequired,
  creativeImagePath: PropTypes.string.isRequired,
  CreativeName: PropTypes.string.isRequired,
  CreativeCurrencyValue: PropTypes.string.isRequired,
  CreativeCurrencyAmount: PropTypes.string.isRequired,
  viewport: PropTypes.oneOf(["desktop", "mobile"]),
  status: PropTypes.oneOf(["default", "hover"]),
  direction: PropTypes.oneOf(["row", "column"]),
  onClick: PropTypes.func,
};
