import { RootState } from "../../state/store";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../state/darkmode/darkModeSlice";

export const DarkModeButton = () => {
  const isToggled = useSelector((state: RootState) => state.darkmode.toggled);
  const dispatch = useDispatch();

  return (
    <div className="hover:cursor-pointer" onClick={() => dispatch(toggle())}>
      {isToggled ? (
        <MdOutlineDarkMode size={23} />
      ) : (
        <MdOutlineLightMode size={23} />
      )}
    </div>
  );
};
