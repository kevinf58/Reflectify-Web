import { ButtonProps } from "../../types/Button.type";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`bg-white text-black text-xs py-1 px-3 rounded-sm hover:bg-opacity-40 hover:text-white transition-all duration-300`}
    >
      {props.action}
    </button>
  );
};
