import React, { useState, useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { ButtonMenuIcon } from "./../../ui/ButtonMenuIcon/ButtonMenuIcon";
import { Logo } from "./../../ui/Logo/Logo";
import "./_menu.scss";

const rawMenuItems = [
  {
    label: "Trend",
    icon: "IconTrendingUp",
    visualOnly: "icon",
  },
  {
    label: "Property",
    icon: "IconSpeakerphone",
    visualOnly: "icon",
  },
  {
    label: "Media",
    icon: "IconPhotoVideo",
    visualOnly: "icon",
  },
  {
    label: "Market",
    icon: "IconShoppingCart",
    visualOnly: "icon",
  },
  {
    label: "Create New Dashboard",
    icon: "IconSquareRoundedPlus",
    visualOnly: "icon",
  },
];

const BottomMenuItems = [
  {
    label: "Notifications",
    icon: "IconBell",
    visualOnly: "icon",
  },
  {
    label: "Profile",
    icon: "IconUser",
    visualOnly: "icon",
  },
];

const menuStatusText = "Open Menu";
const chevronIcon = "IconChevronRight";

export const Menu = ({ isOpen, toggleMenu, extraclass }) => {
  const isCollapsed = !isOpen;
  const parentClass = extraclass || "";

  const statusClass = isCollapsed ? "collapsed" : "open";
  const LogoType = isCollapsed ? "logo" : "logotype";

  const menuItems = rawMenuItems.map((item) => ({
    ...item,
    style: isCollapsed ? "tertiary" : "secondary",
  }));

  const botMenuItems = BottomMenuItems.map((item) => ({
    ...item,
    style: isCollapsed ? "tertiary" : "secondary",
  }));

  return (
    <aside className={`x-menu x-menu--${statusClass} ${parentClass}`}>
      <ButtonMenuIcon
        label="Open Menu"
        iconName="IconChevronRight"
        visualOnly="icon"
        style="primary"
        className="x-menu__collpase-button"
        onClick={toggleMenu}
      />
      <div className="x-menu__logo">
        <Logo type={LogoType} width={200} height={40} />
      </div>

      <nav className="x-menu__nav">
        {menuItems.map((item, index) => (
          <ButtonMenuIcon
            key={index}
            label={item.label}
            iconName={item.icon}
            visualOnly={item.visualOnly}
            style={item.style}
            className="x-menu__button"
          />
        ))}
        <span className="x-menu__line"></span>
        {botMenuItems.map((item, index) => (
          <ButtonMenuIcon
            key={index}
            label={item.label}
            iconName={item.icon}
            visualOnly={item.visualOnly}
            style={item.style}
            className="x-menu__button"
          />
        ))}
      </nav>
    </aside>
  );
};

Menu.propTypes = {};
