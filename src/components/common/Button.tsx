import { ButtonProps } from "../../types/Button.type";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`border-default border-solid ${
        props.disabled
          ? `border-darkgrey bg-grey text-darkgrey`
          : `border-primary bg-none text-white hover:bg-primary/50 hover:text-white`
      } py-1.5 transition-all duration-500 text-base`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {<span className="relative px-4">{props.children}</span>}
    </button>
  );
};
