import React from "react";
import * as TablerIcons from "@tabler/icons-react";
import PropTypes from "prop-types";
import { Button } from "./../../ui/Button/Button";
import "./_broadcastMessage.scss";

/** Primary UI component for user interaction */
export const BroadcastMessage = ({
  style,
  messageTitle,
  messageText,
  ...props
}) => {
   const CurrentStyle= style || "neutral";
  console.log("CurrentStyle", CurrentStyle);
  // Determine fallback icon based on status
  let FallbackIcon;
  switch (CurrentStyle) {
    case "information":
      FallbackIcon = TablerIcons.IconCircleCheck;
      break;
    case "neutral":
      FallbackIcon = TablerIcons.IconInfoCircle;
      break;
    case "warning":
      FallbackIcon = TablerIcons.IconAlertCircle;
      break;
    case "error":
      FallbackIcon = "IconCircleX";
      break;
    default:
      FallbackIcon = TablerIcons.IconInfoCircle;
  }

  const Icon = FallbackIcon ? TablerIcons[FallbackIcon] || FallbackIcon : FallbackIcon;

  return (
    <article className={`x-broadcast x-broadcast--${style}`} {...props}>
      <div className="x-broadcast__message">
        <div className="x-broadcast__icon">{Icon && <Icon stroke={2} size="24"/>}</div>
        <div className="x-broadcast__textBlock">
          <h3 className="x-broadcast__title x-font-16-bold">{messageTitle}</h3>
          <p className="x-broadcast__text x-font-16">{messageText}</p>
        </div>
      </div>
      <Button
        className="x-broadcast__closeButton "
        iconName="IconX"
        iconOnly={true}
        style="flat"
        status="default"
        onClick={() => console.log("Close button clicked")}
      ></Button>
    </article>
  );
};

BroadcastMessage.propTypes = {
  style: PropTypes.oneOf(["neutral", "success", "warning", "error"]),
  messageText: PropTypes.string.isRequired,
  messageTitle: PropTypes.string.isRequired,
};
