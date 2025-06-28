import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconDownload, IconFilter } from "@tabler/icons-react";
import "./_filterToolbar.scss";

export const FilterToolbar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="x-filter-toolbar">
      <div className="x-filter-toolbar__left">
        <h2 className="x-filter-toolbar__title">Trend</h2>
        <div className="x-filter-toolbar__tabs">
          {["Overview", "Owned & Prospective"].map((tab) => (
            <button
              key={tab}
              className={`x-filter-toolbar__tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="x-filter-toolbar__right">
        <div className="x-filter-toolbar__group">
          <span className="x-filter-toolbar__label">Measure</span>
          <select className="x-filter-toolbar__select">
            <option>Dollars</option>
            <option>Impressions</option>
            <option>Clicks</option>
          </select>
        </div>
        <div className="x-filter-toolbar__group">
          <span className="x-filter-toolbar__label">Time Period</span>
          <select className="x-filter-toolbar__select">
            <option>Rolling 12 Months</option>
            <option>Last Month</option>
            <option>Year to Date</option>
          </select>
        </div>
        <button className="x-filter-toolbar__icon-button" aria-label="Download">
          <IconDownload size={20} />
        </button>
        <button className="x-filter-toolbar__icon-button" aria-label="Filter">
          <IconFilter size={20} />
        </button>
      </div>
    </div>
  );
};
FilterToolbar.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};