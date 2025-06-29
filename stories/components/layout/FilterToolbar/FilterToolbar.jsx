import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconDownload, IconFilter } from "@tabler/icons-react";
import { ButtonGroup } from "../../ui/ButtonGroup/ButtonGroup";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import "./_filterToolbar.scss";

export const FilterToolbar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const leftTabs = {
    orientation: "row",
    buttons: [
      {
        iconName: "null",
        iconOnly: false,
        label: "Overview",
        style: "solid",
        active: true,
      },
      {
        iconName: "null",
        iconOnly: false,
        label: "Overview & Prospective",
        style: "outline",
        active: false,
      },
    ],
  };

  const MeasureDropdown = {
    label: "Measure",
    selected: "dollars",
    options: [
      { value: "dollars", label: "Dollars" },
      { value: "units", label: "Units" },
      { value: "impressions", label: "Impressions" },
    ],
    status: "default",
    direction: "row",
  };

  return (
    <article className="x-filter-toolbar">
      <div className="x-filter-toolbar__left">
        <h2 className="x-filter-toolbar__title x-font-title">Trend</h2>
        <ButtonGroup
          orientation={leftTabs.orientation}
          buttons={leftTabs.buttons}
        />
      </div>

      <div className="x-filter-toolbar__right">
        <Dropdown
          label={MeasureDropdown.label}
          selected={MeasureDropdown.selected}
          options={MeasureDropdown.options}
          status={MeasureDropdown.status}
          style="solid"
          direction={MeasureDropdown.direction}
          onChange={(value) => console.log("Selected:", value)}
          className="x-filter-toolbar__dropdown"
        />

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
    </article>
  );
};
FilterToolbar.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};
