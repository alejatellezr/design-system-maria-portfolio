import React from "react";
import PropTypes from "prop-types";

import "./_creativecard.scss";

export const CreativeCard = ({
  viewport = "desktop",
  CreativePosition = "1",
  creativeImagePath = "https://www.mariaalejandratellez.com/wp-content/uploads/2025/07/creative-image-portfolio-001.png",
  CreativeName = "Creative Name",
  CreativeParent = "COMERCIO",
  CreativeCategory = "SUPER HIPERMERCADO ATACADISTA",
  CreativeAdvertiser = "MART MINAS",
  CreativeBrand = "MART MINAS",
  CreativeProduct = "MART MINAS",
  CreativeMedia = "Internet - Display",
  CreativeId = "1234567890",
  CreativeFirstOccurrence = "2025-07-01",
  CreativeCurrencyValue = "$",
  CreativeCurrencyAmount = "1000",
}) => {
  const creativeWidth = viewport === "desktop" ? "450px" : "360px";
  const creativeHeight = viewport === "desktop" ? "450px" : "360px";

  return (
    <div
      className={`x-creative-card x-creative-card--${viewport}`}
    >
      <img
        className="x-creative-card__image"
        src={creativeImagePath}
        alt={CreativeName}
        loading="lazy"
        width={creativeWidth}
        height={creativeHeight}
      />
      <div className="x-creative-card__text-box">
        <h4 className={`x-creative-card__name x-font-subtitle`}>
          {CreativePosition}. {CreativeName}
        </h4>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Parent:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeParent}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Category:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeCategory}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Advertiser:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeAdvertiser}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Brand:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeBrand}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Product:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeProduct}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Media:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeMedia}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Creative ID:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeId}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            First Occurrence:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeFirstOccurrence}
          </p>
        </div>
        <div className="x-creative-card__row">
          <p className="x-creative-card__subitem-label x-font-16-bold">
            Total:
          </p>
          <p className="x-creative-card__subitem-value x-font-16">
            {CreativeCurrencyValue}
            {CreativeCurrencyAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

CreativeCard.propTypes = {
  CreativePosition: PropTypes.string.isRequired,
  creativeImagePath: PropTypes.string.isRequired,
  CreativeName: PropTypes.string.isRequired,
  CreativeCurrencyValue: PropTypes.string.isRequired,
  CreativeCurrencyAmount: PropTypes.string.isRequired,
  viewport: PropTypes.oneOf(["desktop", "mobile"]),
};
