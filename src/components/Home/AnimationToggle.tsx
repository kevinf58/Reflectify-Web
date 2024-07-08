import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { toggle } from "../../state/animations/animationSlice";

export const AnimationToggle = () => {
  const animationToggled = useSelector((state: RootState) => state.animations.toggled);
  const dispatch = useDispatch();

  return (
    <button
      className="fixed bottom-0 right-0 z-10 m-2 text-sm"
      onClick={() => dispatch(toggle())}
    >
      <span className="font-light">Animations </span>
      <span className={`${animationToggled ? "text-success" : "text-error"} font-medium`}>
        {animationToggled ? "ON" : "OFF"}
      </span>
    </button>
  );
};
