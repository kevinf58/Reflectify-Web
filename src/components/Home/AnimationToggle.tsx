import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { toggle } from "../../state/animations/animationSlice";

export const AnimationToggle = () => {
  const isToggled = useSelector((state: RootState) => state.animations.toggled);
  const dispatch = useDispatch();

  return (
    <button
      className="fixed bottom-0 right-0 z-10 m-2 text-sm"
      onClick={() => dispatch(toggle())}
    >
      <span className="text-white font-extralight">Animations </span>
      <span className={`${isToggled ? "text-success" : "text-error"} font-medium`}>
        {isToggled ? "ON" : "OFF"}
      </span>
    </button>
  );
};
