import React from "react";
import PropTypes from "prop-types";

import { Button } from "./../../ui/Button/Button";
import { ButtonMenuIcon } from "./../../ui/ButtonMenuIcon/ButtonMenuIcon";
import { Logo } from "./../../ui/Logo/Logo";

import "./_header.scss";

export const Header = ({
  user = null,
  onLogin,
  onLogout,
  onCreateAccount,
  scheme, 
}) => {

  return (
    <header className={`x-header`}>
      <div className="x-header__left-column">
        <Logo type="logotype" theme={scheme} width={200} height={40} />
      </div>
      <div className="x-header__right-column">
        {user ? (
          <>
            <p className="x-header__welcome-message x-font-16-bold">
              Welcome, {user.name}!
            </p>
            <ButtonMenuIcon
              iconName="IconSettings"
              label="Settings"
              className="x-header__settings-button"
              onClick={() => console.log("Settings clicked")}
            />
            <ButtonMenuIcon
              visualOnly="image"
              iconImage="https://i0.wp.com/www.mariaalejandratellez.com/wp-content/uploads/2025/04/maria-alejandra-tellez-portfolio-image.jpg"
              label="User Profile"
              className="x-header__user-button"
              onClick={onLogout}
            />
          </>
        ) : (
          <>
            <ButtonMenuIcon
              iconName="IconLogin"
              label="Log in"
              className="x-header__settings-button"
              onClick={onLogin}
            />
            <Button primary onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  scheme: PropTypes.oneOf(["light", "dark"]), 
};
