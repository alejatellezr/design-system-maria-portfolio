import React from "react";
import PropTypes from "prop-types";
import { IconSearch } from "@tabler/icons-react";
import "./_search.scss";

export const Search = ({
  placeholder = "Search...",
  disabled = false,
  status,
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className={`x-search ${disabled ? "disabled" : ""} x-search--${status} ${className}`}>
      <IconSearch className={`x-search--icon x-icon--${status}`} stroke={2} />
      <input
        type="search"
        className="x-search--input x-font-16"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  status: PropTypes.oneOf(["default", "hover", "disabled", "error"]),
};
