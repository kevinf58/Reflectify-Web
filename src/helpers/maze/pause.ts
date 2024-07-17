import { DELAY } from "../../constants";

export const pause = () => {
  return new Promise((resolve) => setTimeout(resolve, DELAY));
};