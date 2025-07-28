import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  leftTabs,
  MeasureDropdown,
  TimePeriodDropdown,
  tabOptions,
  allMediaOptions,
  allMarketsOptions,
  GridAccountsColumns,
  GridAccountsData,
  GridPropertyData,
  AdditionalSettingsRollup,
} from "../../../utils/FilterToolbarData";
import { ButtonGroup } from "../../ui/ButtonGroup/ButtonGroup";
import { ButtonMenuIcon } from "../../ui/ButtonMenuIcon/ButtonMenuIcon";
import Dropdown from "../../ui/dropdown/Dropdown";
import TabsGroup from "../../ui/TabGroup/TabsGroup";
import { Search } from "../../ui/Search/Search";
import MultiSelect from "../../ui/MultiSelect/MultiSelect";
import "./_filterToolbar.scss";
import { Button } from "../../ui/Button/Button";
import Checkbox from "../../ui/Checkbox/Checkbox";
import Grid from "../../ui/Grid/Grid";
import RadioButtonGroup from "../../ui/RadioButtonGroup/RadioButtonGroup";

export const FilterToolbar = () => {
  const [activePreview, setActivePreview] = useState("Overview");
  const [showSettings, setShowSettings] = useState(false);
  const [selectedMeasure, setSelectedMeasure] = useState("dollars");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("01");

  const [activeTab, setActiveTab] = useState(tabOptions[0]);

  const [valueSearch, setValueSearch] = useState("");

  const [selectedMedias, setSelectedMedias] = useState(["National TV"]);
  const [selectedMarkets, setSelectedMarkets] = useState(["ALL MARKETS"]);

  const [isCheckedCompetitiveProspects, setIsCheckedCompetitiveProspects] =
    useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsCheckedCompetitiveProspects(checked);
    setIsIndeterminate(false);
  };

  const [selectedRollUp, setSelectedRollUp] = useState("advertiser");

  return (
    <section className="x-filter-toolbar">
      <section className="x-filter-toolbar__header">
        <div className="x-filter-toolbar__left">
          <h2 className="x-filter-toolbar__title x-font-title">Trend</h2>
          <ButtonGroup
            orientation={leftTabs.orientation}
            buttons={leftTabs.buttons}
            activeTab={activePreview}
            setActiveTab={setActivePreview}
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
      </section>
      {showSettings && (
        <section className="x-filter-toolbar__content">
          <TabsGroup tabs={tabOptions} onChange={(tab) => setActiveTab(tab)} />
          {activeTab.value === "media" && (
            <article className="x-filter-toolbar__section x-filter-toolbar__section--media">
              <MultiSelect
                options={allMediaOptions}
                selected={selectedMedias}
                onChange={setSelectedMedias}
              />
            </article>
          )}

          {activeTab.value === "accounts" && (
            <article className="x-filter-toolbar__section x-filter-toolbar__section--accounts">
              <div className="x-filter-toolbar__section--row">
                <Search
                  value={valueSearch}
                  placeholder="Search Accounts..."
                  onChange={(e) => setValueSearch(e.target.value)}
                />
                <Checkbox
                  checked={isCheckedCompetitiveProspects}
                  indeterminate={isIndeterminate}
                  onChange={handleChange}
                  label="Activate Competitive Prospects"
                  labelPosition="right"
                />
              </div>
              <Grid
                columns={GridAccountsColumns}
                data={GridAccountsData}
                showFilters={true}
              />
            </article>
          )}

          {activeTab.value === "property" && (
            <article className="x-filter-toolbar__section x-filter-toolbar__section--property">
              <div className="x-filter-toolbar__section--row">
                <Search
                  value={valueSearch}
                  placeholder="Search Properties..."
                  onChange={(e) => setValueSearch(e.target.value)}
                />
                <Checkbox
                  checked={isCheckedCompetitiveProspects}
                  indeterminate={isIndeterminate}
                  onChange={handleChange}
                  label="Activate Competitive Prospects"
                  labelPosition="right"
                />
              </div>
              <Grid
                columns={GridAccountsColumns}
                data={GridPropertyData}
                showFilters={true}
              />
            </article>
          )}

          {activeTab.value === "markets" && (
            <article className="x-filter-toolbar__section x-filter-toolbar__section--markets">
              <MultiSelect
                options={allMarketsOptions}
                selected={selectedMarkets}
                onChange={setSelectedMarkets}
              />
            </article>
          )}

          {activeTab.value === "additional" && (
            <article className="x-filter-toolbar__section x-filter-toolbar__section--additional">
              <div className="x-filter-toolbar__section--block">
                <p className="x-filter-toolbar__text x-font-16-bold">Roll up activity by</p>
                <RadioButtonGroup
                  name="roll-up-activity-by"
                  options={AdditionalSettingsRollup}
                  value={selectedRollUp}
                  onChange={setSelectedRollUp}
                  orientation="row"
                />
              </div>
              <div className="x-filter-toolbar__section--block">
                <p className="x-filter-toolbar__text x-font-16-bold">Global Actions</p>
                <Button label="DUPLICATE THIS DASHBOARD" style="outline" />
                <Checkbox
                  checked={isCheckedCompetitiveProspects}
                  indeterminate={isIndeterminate}
                  onChange={handleChange}
                  label="Apply Configuration to ALL the Default Dashboards"
                  labelPosition="right"
                />
              </div>
            </article>
          )}
          <article className="x-filter-toolbar__section x-filter-toolbar__section--actions">
            <Button label="CANCEL" style="flat" />
            <Button label="SAVE" style="solid" />
          </article>
        </section>
      )}
    </section>
  );
};
FilterToolbar.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};
