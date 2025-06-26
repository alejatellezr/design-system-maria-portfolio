import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import PropTypes from "prop-types";
import { Button } from "./../../ui/Button/Button";
import { Logo } from "../../ui/Logo/Logo";

export const Header = ({ user = null, onLogin, onLogout, onCreateAccount }) => (
  <header className="x-header">
    <div className="x-header__left-column">
      <Logo type="logotype" theme="light" width={200} height={40} />
    </div>
    <div className="x-header__right-column">
      {user ? (
        <>
          <span className="welcome">
            Welcome, <b>{user.name}</b>!
          </span>
          <Button onClick={onLogout} label="Log out" />
        </>
      ) : (
        <>
          <Button onClick={onLogin} label="Log in" />
          <Button primary onClick={onCreateAccount} label="Sign up" />
        </>
      )}
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};
