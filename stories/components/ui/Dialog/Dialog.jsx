import React from "react";
import PropTypes from "prop-types";
import { Button } from "./../Button/Button";
import "./_dialog.scss";

const Dialog = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  informative,
  customWidth = "auto",
  customHeight = "auto",
}) => {
  if (!isOpen) return null;

  return (
    <article className="x-dialog__overlay" role="dialog" aria-modal="true">
      <div className="x-dialog__container" style={{ width: customWidth, height: customHeight }}>
        <div className="x-dialog__header">
          <h3 className="x-dialog__title x-font-subtitle">{title}</h3>
          <Button
            className="x-dialog__close"
            iconName="IconX"
            iconOnly={true}
            style="flat"
            status="default"
            onClick={onClose}
          />
        </div>
        <div className="x-dialog__body">{children}</div>
        {!informative && (
          <div className="x-dialog__footer">
            <Button
              className="x-dialog__cancel"
              label="Cancel"
              iconName=""
              iconOnly={false}
              style="flat"
              status="default"
              onClick={onClose}
            />
            <Button
              className="x-dialog__save"
              label="Save"
              iconName=""
              iconOnly={false}
              style="solid"
              primary={true}
              status="default"
              onClick={onConfirm}
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default Dialog;
Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  informative: PropTypes.bool.isRequired,
};
