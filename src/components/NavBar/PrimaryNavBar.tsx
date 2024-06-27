import { Link } from "../common/Link";

export const PrimaryNavBar = () => {
  return (
    <nav className="flex w-screen bg-white/30 px-12 py-5 font-bold text-white">
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
      </ul>
    </nav>
  );
};
