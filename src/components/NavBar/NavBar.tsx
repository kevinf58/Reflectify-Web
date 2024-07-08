import { DarkModeToggle } from "../common/DarkModeToggle";
import { Link } from "../common/Link";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const NavBar = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <nav className={`flex w-screen px-12 py-5 font-bold`}>
      <h1 className="text-base">KEVIN FENG</h1>
      <ul className="ml-auto flex items-center space-x-6">
        <li>
          <Link
            onClick={() => console.log("BLOG")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link
            onClick={() => console.log("PROJECTS")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            onClick={() => console.log("ABOUT")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            onClick={() => console.log("CONTACT")}
            bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
            textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};
