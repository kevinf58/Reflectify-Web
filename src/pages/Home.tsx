import { BlinkingCursor } from "../components/Home/BlinkingCursor";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Link } from "../components/common/Link";
import { ProfileLinks } from "../components/Home/ProfileLinks";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  const nav = useNavigate();

  return (
    <>
      <section className="absolute inset-0 flex items-center">
        <div className="ml-12 flex w-3/5 lg:w-4/5 flex-col font-bold tracking-wide">
          <div
            className={`mb-3 flex items-end text-lg ${
              isDarkMode ? "text-primary" : "text-secondary"
            }`}
          >
            HI, MY NAME IS KEVIN {<BlinkingCursor />}
          </div>
          <div className="text-6xl">I Like Building Websites</div>
          <div className="my-8 font-medium leading-snug">
            I’m a Computer Science student currently studying at the University
            of Western Ontario. Feel free to check out my{" "}
            <Link
              underline
              bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
              textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
              onClick={() => nav("/blog")}
            >
              Blog
            </Link>
            and
            <Link
              underline
              bgColor={`${isDarkMode ? "before:bg-white" : "before:bg-black"}`}
              textColor={`${isDarkMode ? "hover:text-black" : "hover:text-white"}`}
              onClick={() => nav("/projects")}
            >
              Portfolio!
            </Link>
          </div>
          <div
            className={`h-1 w-96 ${isDarkMode ? "bg-primary" : "bg-secondary"}`}
          />
        </div>
        <ProfileLinks />
      </section>
    </>
  );
};
