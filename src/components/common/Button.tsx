import { RootState } from "../../state/store";
import { ButtonProps } from "../../types/Button.type";
import { useSelector } from "react-redux";

export const Button = (props: ButtonProps) => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <button
      className={`border-default border-solid ${
        props.disabled
          ? isDarkMode
            ? "border-secondary/60 text-white/60"
            : "border-primary/60 text-white/60"
          : isDarkMode
            ? "border-primary hover:bg-primary/50"
            : "border-secondary hover:bg-secondary/50"
      } py-1.5 text-base`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {<span className="relative px-4">{props.children}</span>}
    </button>
  );
};
