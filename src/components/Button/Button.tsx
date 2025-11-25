import { FC } from "react";
import { IButtonProps } from "./Button.types";

export const Button: FC<IButtonProps> = ({ onClick, children }) => {
  return <button data-testid='button-control' onClick={onClick}>{children}</button>
}
