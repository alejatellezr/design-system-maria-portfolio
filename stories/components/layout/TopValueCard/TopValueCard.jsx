import React from "react";
import PropTypes from "prop-types";
import {
  IconTriangleFilled,
  IconTriangleInvertedFilled,
} from "@tabler/icons-react";

import "./_topValueCard.scss";

export const TopValueCard = ({
  direction = "row",
  viewport = "desktop",
  status = "positive",
  TopCardTitle = "Total Spend",
  TopCardNote = "Compared to previous period ",
  TopCardPercentage = "15%",
  TopCardCurrencyValue = "$",
  TopCardCurrencyAmount = "1000",
}) => {

  return (
    <div
      className={`x-top-value-card x-top-value-card--${direction} x-top-value-card--${status} x-top-value-card--${viewport}`}
    >
      <h3 className={`x-top-value-card__title x-font-subtitle`}>
        {TopCardTitle}
      </h3>
      <div className={`x-top-value-card__value-container`}>
        <h4 className={`x-top-value-card__currency x-font-subtitle`}>
          <span className="x-top-value-card__currency-value">
            {TopCardCurrencyValue}
          </span>
          <span className="x-top-value-card__currency-amount">
            {TopCardCurrencyAmount}
          </span>
        </h4>
        <div className={`x-top-value-card__behaviour`}>
          <IconTriangleFilled />
          <IconTriangleInvertedFilled />
          <p className="x-top-value-card__behaviour-percentage x-font-16-bold">
            {TopCardPercentage}
          </p>
        </div>
      </div>
      <p className="x-top-value-card__note x-font-16">{TopCardNote}</p>
    </div>
  );
};

TopValueCard.propTypes = {
  TopCardTitle: PropTypes.string.isRequired,
  CreativeName: PropTypes.string.isRequired,
  TopCardCurrencyValue: PropTypes.string.isRequired,
  TopCardCurrencyAmount: PropTypes.string.isRequired,
  viewport: PropTypes.oneOf(["desktop", "mobile"]),
  status: PropTypes.oneOf(["positive", "negative"]),
  direction: PropTypes.oneOf(["row", "column"]),
};
