import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { toggle } from "../../state/animations/animationSlice";

export const AnimationToggle = () => {
  const isToggled = useSelector((state: RootState) => state.animations.toggled);
  const dispatch = useDispatch();

  return (
    <button className="fixed right-0 z-10 m-2" onClick={() => dispatch(toggle())}>
      {isToggled ? (
        <FaCirclePause color="#F5F5F5" size={25} />
      ) : (
        <FaCirclePlay color="#F5F5F5" size={25} />
      )}
    </button>
  );
};
