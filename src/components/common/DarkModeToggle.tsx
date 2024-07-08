import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { toggle } from "../../state/darkmode/darkModeSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const DarkModeToggle = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggle())}>
      {isDarkMode ? (
        <MdOutlineLightMode size={24} />
      ) : (
        <MdOutlineDarkMode size={24} />
      )}
    </button>
  );
};
