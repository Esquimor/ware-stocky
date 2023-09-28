import { ButtonProps } from "./Button.interface";

export default function Button({onClick, children}: ButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}