import { useEffect, useState, useRef } from "react";
import { Breakpoints } from "../types/Breakpoints.type";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState({ width: window.innerWidth });
  const currBreakpoint = useRef<keyof Breakpoints>("2xl");

  useEffect(() => {
    const handleBreakpoint = () => {
      setBreakpoint({ width: window.innerWidth });

      currBreakpoint.current =
        breakpoint.width <= 640
          ? "sm"
          : breakpoint.width <= 768
            ? "md"
            : breakpoint.width <= 1024
              ? "lg"
              : breakpoint.width <= 1280
                ? "xl"
                : "2xl";
    };

    window.addEventListener("resize", handleBreakpoint);
    handleBreakpoint();

    return () => {
      window.removeEventListener("resize", handleBreakpoint);
    };
  }, [breakpoint.width]);

  return currBreakpoint;
};
