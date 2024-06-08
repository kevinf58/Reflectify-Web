import { ButtonProps } from "../../types/Button.type";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`bg-${props.bgColor} text-${props.textColor} ${
        props.size === "small"
          ? ""
          : props.size === "default"
          ? "text-xs py-1 px-3"
          : props.size === "large"
          ? "text-base py-1 px-4"
          : ""
      } rounded-sm hover:bg-opacity-40 hover:text-white transition-all duration-300`}
    >
      {props.action}
    </button>
  );
};
