import { Button } from "../components/common/Button";
import { ProfileLinks } from "../components/Home/ProfileLinks";
import { BlinkingCursor } from "../components/Home/BlinkingCursor";
import { AnimationToggle } from "../components/Home/AnimationToggle";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { GenerateMaze } from "../components/Home/Maze/Maze";

export const Home = () => {
  const isAnimated = useSelector(
    (state: RootState) => state.animations.toggled,
  );
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <>
      <AnimationToggle />
      <section className="absolute inset-0 flex items-center">
        <div className="ml-12 flex w-1/3 flex-col font-bold tracking-wide">
          <div
            className={`mb-3 flex items-end text-xl ${
              isDarkMode ? "text-primary" : "text-secondary"
            }`}
          >
            {">"} HI, MY NAME IS {isAnimated && <BlinkingCursor />}
          </div>
          <div className="text-6xl">KEVIN FENG</div>
          <div className="my-8 font-semibold leading-snug">
            I'm a Software Developer deeply interested in Web Development
            technologies. Currently, I most enjoy using{" "}
            {
              <span
                className={`${isDarkMode ? "text-primary" : "text-secondary"}`}
              >
                TypeScript
              </span>
            }{" "}
            and{" "}
            {
              <span
                className={`${isDarkMode ? "text-primary" : "text-secondary"}`}
              >
                React
              </span>
            }
            !
          </div>
          <div className="space-x-6">
            <Button onClick={() => console.log("PROJECTS")}>PROJECTS</Button>
            <Button onClick={() => console.log("BLOG")}>BLOG</Button>
          </div>
        </div>
        <ProfileLinks />
        <div
          className={`fixed right-0 flex h-screen w-5/12 flex-col transition-colors duration-300 ease-in ${
            isDarkMode ? "bg-secondary" : "bg-primary"
          } flex items-center justify-center text-center text-xs font-light`}
        >
          <GenerateMaze />
        </div>
      </section>
    </>
  );
};
