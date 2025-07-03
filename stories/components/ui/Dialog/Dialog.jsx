// Dialog.jsx
import React from 'react';
import PropTypes from "prop-types";
import './_dialog.scss';

const Dialog = ({ isOpen, title, children, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" role="dialog" aria-modal="true">
      <div className="dialog">
        <button className="dialog-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="dialog-header">{title}</div>
        <div className="dialog-body">{children}</div>
        <div className="dialog-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};