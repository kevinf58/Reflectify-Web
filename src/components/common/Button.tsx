import { ButtonProps } from "../../types/Button.type";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`border-default border-solid ${
        props.disabled
          ? `border-darkgrey bg-grey text-darkgrey`
          : `${props.borderColor} ${props.bgColor} ${props.hoverTextColor} text-black hover:bg-opacity-20`
      } px-2 py-0.5 text-xs transition-all duration-300`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Test Button
    </button>
  );
};
