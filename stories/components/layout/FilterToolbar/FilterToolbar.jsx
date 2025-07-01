import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { ButtonGroup } from "../../ui/ButtonGroup/ButtonGroup";
import { ButtonMenuIcon } from "../../ui/ButtonMenuIcon/ButtonMenuIcon";
import { Dropdown } from "../../ui/dropdown/Dropdown";
import "./_filterToolbar.scss";

export const FilterToolbar = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [showSettings, setShowSettings] = useState(false);
  const [selectedMeasure, setSelectedMeasure] = useState("dollars");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("01");

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

  const TimePeriodDropdown = {
    label: "Time Period",
    selected: "01",
    options: [
      { value: "01", label: "Rolling 12 Months" },
      { value: "02", label: "Rolling 6 Months" },
      { value: "03", label: "Current Month" },
      { value: "04", label: "Previous Month" },
      { value: "05", label: "Current Year" },
      { value: "06", label: "Previous Year" },
    ],
    status: "default",
    direction: "row",
  };

  return (
    <article className="x-filter-toolbar">
      <div className="x-filter-toolbar__header">
        <div className="x-filter-toolbar__left">
          <h2 className="x-filter-toolbar__title x-font-title">Trend</h2>
          <ButtonGroup
            orientation={leftTabs.orientation}
            buttons={leftTabs.buttons}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="x-filter-toolbar__tabs"
          />
        </div>

        <div className="x-filter-toolbar__right">
          <Dropdown
            label={MeasureDropdown.label}
            selected={selectedMeasure}
            options={MeasureDropdown.options}
            status={MeasureDropdown.status}
            style="solid"
            direction={MeasureDropdown.direction}
            onChange={setSelectedMeasure}
            className="x-filter-toolbar__dropdown"
          />

          <Dropdown
            label={TimePeriodDropdown.label}
            selected={selectedTimePeriod}
            options={TimePeriodDropdown.options}
            status={TimePeriodDropdown.status}
            style="solid"
            direction={TimePeriodDropdown.direction}
            onChange={setSelectedTimePeriod}
            className="x-filter-toolbar__dropdown"
          />

          <ButtonMenuIcon
            label="Download"
            iconName="IconDownload"
            visualOnly="icon"
            style="primary"
            className="x-menu__icon-button"
            onClick={() => console.log("Download clicked")}
          />

          <ButtonMenuIcon
            label="Settings"
            iconName="IconAdjustments"
            visualOnly="icon"
            style="primary"
            className="x-menu__icon-button"
            onClick={() => setShowSettings((prev) => !prev)}
          />
        </div>
      </div>
      {showSettings && (
        <div className="x-filter-toolbar__content">
          <p>Filter settings content...</p>
        </div>
      )}
    </article>
  );
};
FilterToolbar.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};
