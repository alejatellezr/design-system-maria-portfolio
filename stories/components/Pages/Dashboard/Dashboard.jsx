import React from "react";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { Menu } from "../../layout/Menu/Menu";
import WidgetOverview from "../../layout/WidgetOverview/WidgetOverview";
import WidgetSpend from "../../layout/WidgetSpend/WidgetSpend";
import CreativeTop from "../../layout/CreativeTop/CreativeTop";
import { mockAdvertisers } from "../../../utils/CreativesData";
import { FilterToolbar } from "../../layout/FilterToolbar/FilterToolbar";
import { TopValueCard } from "../../layout/TopValueCard/TopValueCard";
import "./_dashboard.scss";

const Dashboard = () => {
  const user = { name: "Larissa Oliveira" };

  const handleLogin = () => console.log("Login clicked");
  const handleLogout = () => console.log("Logout clicked");
  const handleCreateAccount = () => console.log("Create account clicked");

  const footerData = {
    brandName: "Curie Insights",
    currentYear: new Date().getFullYear(),
  };

  const topCreatives = {
    topAdvertisers: mockAdvertisers,
    viewport: "desktop",
  };

  const PositiveCard = {
    direction: "column",
    viewport: "desktop",
    status: "positive",
    TopCardTitle: "Total Spend",
    TopCardNote: "Compared to previous period ",
    TopCardPercentage: "15%",
    TopCardCurrencyValue: "$",
    TopCardCurrencyAmount: "1000",
  };

  const NegativeCard = {
    direction: "column",
    viewport: "desktop",
    status: "negative",
    TopCardTitle: "Total Spend",
    TopCardNote: "Compared to previous period ",
    TopCardPercentage: "15%",
    TopCardCurrencyValue: "$",
    TopCardCurrencyAmount: "1000",
  };
  return (
    <body className="x-dashboard">
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
        scheme="light"
      />
      <section className="x-dashboard__main">
        <Menu />
        <section className="x-dashboard__panel">
          <FilterToolbar className="x-dashboard__filter" />
          <article className="x-dashboard__widgets">
            <div className="x-dashboard__widgets-left">
              <div className="x-dashboard__widgets-small-charts">
                <TopValueCard
                  title={PositiveCard.TopCardTitle}
                  status={PositiveCard.status}
                  TopCardNote={PositiveCard.TopCardNote}
                  TopCardPercentage={PositiveCard.TopCardPercentage}
                  TopCardCurrencyValue={PositiveCard.TopCardCurrencyValue}
                  TopCardCurrencyAmount={PositiveCard.TopCardCurrencyAmount}
                  direction={PositiveCard.direction}
                  viewport={PositiveCard.viewport}
                />
                <TopValueCard
                  title={NegativeCard.TopCardTitle}
                  status={NegativeCard.status}
                  TopCardNote={NegativeCard.TopCardNote}
                  TopCardPercentage={NegativeCard.TopCardPercentage}
                  TopCardCurrencyValue={NegativeCard.TopCardCurrencyValue}
                  TopCardCurrencyAmount={NegativeCard.TopCardCurrencyAmount}
                  direction={NegativeCard.direction}
                  viewport={NegativeCard.viewport}
                />
                <WidgetSpend className="x-dashboard__widgets-trend" />
              </div>
              <WidgetOverview />
            </div>
            <div className="x-dashboard__widgets-right">
              <CreativeTop
                topAdvertisers={topCreatives.topAdvertisers}
                viewport={topCreatives.viewport}
              />
            </div>
          </article>
        </section>
      </section>

      <Footer
        brandName={footerData.brandName}
        currentYear={footerData.currentYear}
      />
    </body>
  );
};

export default Dashboard;
