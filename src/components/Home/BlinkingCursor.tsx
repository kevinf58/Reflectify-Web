import { RootState } from "../../state/store";
import { BlinkingCursorType } from "../../types/BlinkingCursor.type";
import { useSelector } from "react-redux";

export const BlinkingCursor = (props: BlinkingCursorType) => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <div
      className={`mb-1 ml-[2px] h-[3px] w-3 ${
        isDarkMode ? "bg-primary" : "bg-secondary"
      } ${props.disabled ? "" : "animate-blink"}`}
    />
  );
};
