import { Link } from "../common/Link";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { DarkModeButton } from "../common/DarkModeButton";

export const NavBar = () => {
  const darkModeToggled = useSelector(
    (state: RootState) => state.darkmode.toggled,
  );

  return (
    <nav
      className={`flex w-screen ${
        darkModeToggled ? "bg-darkgrey/15" : "bg-white/15"
      } px-12 py-5 font-bold text-white transition-colors duration-500 ease-in`}
    >
      <h1 className="text-base">KEVIN FENG</h1>
      <ul className="ml-auto flex items-center space-x-6">
        <li>
          <Link
            onClick={() => console.log("BLOG")}
            bgColor="before:bg-white"
            textColor="hover:text-black"
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link
            onClick={() => console.log("PROJECTS")}
            bgColor="before:bg-white"
            textColor="hover:text-black"
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            onClick={() => console.log("ABOUT")}
            bgColor="before:bg-white"
            textColor="hover:text-black"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            onClick={() => console.log("CONTACT")}
            bgColor="before:bg-white"
            textColor="hover:text-black"
          >
            CONTACT
          </Link>
        </li>
        <li>
          <DarkModeButton />
        </li>
      </ul>
    </nav>
  );
};
