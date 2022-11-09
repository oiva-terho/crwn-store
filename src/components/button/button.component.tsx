import { ButtonHTMLAttributes, FC } from 'react';
import {
  ButtonBase,
  ButtonGoogleSignIn,
  ButtonInverted
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof ButtonBase =>
  ({
    [BUTTON_TYPE_CLASSES.base]: ButtonBase,
    [BUTTON_TYPE_CLASSES.google]: ButtonGoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: ButtonInverted
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  const CustonButton = getButton(buttonType);
  return <CustonButton {...otherProps}>{children}</CustonButton>;
};
