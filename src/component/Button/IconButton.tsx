import React from "react";
import ButtonConstants from "./ButtonConstants";
import ButtonType from "./Type";
import "./style.css";
import icon from "../../assets/images/icon.jpg";

const IconButton: React.FC<IconButtonType> = ({
  label = "location",
  clickHandler,
}) => {
  const buttonClass = `twk-button-2`;
  return (
    <button
      className={buttonClass}
      onClick={() => {
        if (clickHandler) clickHandler();
      }}
      data-testid={ButtonConstants.ButtonTestId.toString()}
    >
      <span className="twk-text">{label}</span>
      <img className="img" src={icon} alt="icon" height={32} width={32} />
    </button>
  );
};

export default IconButton;
