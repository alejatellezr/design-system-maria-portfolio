import React from "react";
import PropTypes from "prop-types";

import "./_footer.scss";

export const Footer = ({ brandName, currentYear }) => {
  return (
    <footer className={`x-footer`}>
      <p className="x-footer__disclaimer x-font-14">
        {brandName} &copy; {currentYear}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  brandName: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  scheme: PropTypes.oneOf(["light", "dark"]),
};
