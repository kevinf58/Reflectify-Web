import { BlinkingCursorType } from "../../types/BlinkingCursor.type";

export const BlinkingCursor = (props: BlinkingCursorType) => {
  return (
    <div
      className={`mb-1 ml-1 h-1 w-4 bg-primary ${props.disabled ? "" : "animate-blink"}`}
    />
  );
};
