import { DarkModeToggle } from "./DarkModeToggle";
import { Link } from "../common/Link";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  const nav = useNavigate();

  return (
    <nav className={`flex w-screen px-12 py-5 font-semibold`}>
      <button onClick={() => nav("/")} className="flex items-center">
        <FaCode className="mr-2" size={16} />
        <h1 className="text-base">KEVIN FENG</h1>
      </button>
      <ul className="ml-auto flex items-center space-x-5">
        <li>
          <Link
            onClick={() => nav("/blog")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            onClick={() => nav("/projects")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => nav("/about")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => nav("/contact")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            Contact
          </Link>
        </li>
        <li className="h-[24px]">
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};
