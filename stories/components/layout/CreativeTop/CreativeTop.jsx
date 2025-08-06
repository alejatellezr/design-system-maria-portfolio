import React, { useState } from "react";
import PropTypes from "prop-types";
import { CreativeThumbnail } from "./../CreativeThumbnail/CreativeThumbnail";
import Dialog from "../../ui/Dialog/Dialog";
import { CreativeCard } from "./../CreativeCard/CreativeCard"; 

import "./_creativeTop.scss";

const CreativeTop = ({ topAdvertisers = [], viewport = "desktop" }) => {
  const [selectedAdvertiser, setSelectedAdvertiser] = useState(null);

  const handleOpenDialog = (advertiser) => {
    setSelectedAdvertiser(advertiser);
  };

  const handleCloseDialog = () => {
    setSelectedAdvertiser(null);
  };

  const handleConfirm = () => {
    // Add any confirm logic here if needed
    setSelectedAdvertiser(null);
  };

  return (
    <section className={`x-creative-top x-creative-top--${viewport}`}>
      <h2 className="x-creative-top__title x-font-subtitle">Top Creatives</h2>
      <ul className="x-creative-top__list">
        {topAdvertisers.slice(0, 10).map((advertiser, index) => (
          <li className="x-creative-top__item" key={advertiser.id || index}>
            <CreativeThumbnail
              CreativePosition={(index + 1).toString()}
              creativeImagePath={advertiser.creativeImagePath}
              CreativeName={advertiser.CreativeName}
              CreativeCurrencyValue={advertiser.CreativeCurrencyValue}
              CreativeCurrencyAmount={advertiser.CreativeCurrencyAmount}
              viewport={viewport}
              status="default"
              direction="row"
              onClick={() => handleOpenDialog(advertiser)}
            />
          </li>
        ))}
      </ul>{/***/}
      {selectedAdvertiser && (
        <Dialog
          isOpen={true}
          title="Creative Details"
          onClose={handleCloseDialog}
          onConfirm={handleConfirm}
          informative={true}
          customWidth="800px"
        >
          <CreativeCard
            viewport={viewport}
            CreativePosition={selectedAdvertiser.CreativePosition}
            creativeImagePath={selectedAdvertiser.creativeImagePath}
            CreativeName={selectedAdvertiser.CreativeName}
            CreativeParent={selectedAdvertiser.CreativeParent || "N/A"}
            CreativeCategory={selectedAdvertiser.CreativeCategory || "N/A"}
            CreativeAdvertiser={selectedAdvertiser.CreativeAdvertiser || selectedAdvertiser.name}
            CreativeBrand={selectedAdvertiser.CreativeBrand || "N/A"}
            CreativeProduct={selectedAdvertiser.CreativeProduct || "N/A"}
            CreativeMedia={selectedAdvertiser.CreativeMedia || "N/A"}
            CreativeId={selectedAdvertiser.CreativeId?.toString() || "N/A"}
            CreativeFirstOccurrence={selectedAdvertiser.CreativeFirstOccurrence || "N/A"}
            CreativeCurrencyValue={selectedAdvertiser.CreativeCurrencyValue}
            CreativeCurrencyAmount={selectedAdvertiser.CreativeCurrencyAmount}
          />
        </Dialog>
      )} 
    </section>
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
