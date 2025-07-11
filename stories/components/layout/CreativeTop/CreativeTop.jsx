import React from "react";
import PropTypes from "prop-types";
import {CreativeThumbnail} from "./../CreativeThumbnail/CreativeThumbnail";

import "./_creativeTop.scss";

const CreativeTop = ({ topAdvertisers = [], viewport = "desktop" }) => {
  return (
    <div className={`x-creative-top x-creative-top--${viewport}`}>
      <h2 className="x-creative-top__title x-font-subtitle">Top Creatives</h2>
      <div className="x-creative-top__list">
        {topAdvertisers.slice(0, 10).map((advertiser, index) => (
          <CreativeThumbnail
            key={advertiser.id || index}
            CreativePosition={(index + 1).toString()}
            creativeImagePath={advertiser.image}
            CreativeName={advertiser.name}
            CreativeCurrencyValue={advertiser.currencySymbol}
            CreativeCurrencyAmount={advertiser.amount}
            viewport={viewport}
            status="default"
            direction="row"
          />
        ))}
      </div>
    </div>
  );
};

CreativeTop.propTypes = {
  topAdvertisers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      currencySymbol: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
  viewport: PropTypes.oneOf(["desktop", "mobile"]),
};

export default CreativeTop;
