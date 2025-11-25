import { FC } from "react";
import { IInputProps } from "./Input.types";

export const Input: FC<IInputProps> = ({ value, onChange, placeholder = '' }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <input data-testid='input-control' value={value} onChange={onChangeHandler} placeholder={placeholder} />
  )
}
