import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  const buttonMap = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };
  if (!buttonMap[buttonType]) {
    console.warn(
      `Unknown button type: ${buttonType}, falling back to base button`
    );
  }
  // Fallback to BaseButton if the provided buttonType doesn't exist
  return buttonMap[buttonType] || BaseButton;
};
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  console.log("buttonType: ", buttonType);
  console.log("CustomButton: ", CustomButton);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
