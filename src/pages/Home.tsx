import { Button } from "../components/common/Button";
import { ProfileLinks } from "../components/Home/ProfileLinks";
import { BlinkingCursor } from "../components/Home/BlinkingCursor";
import { AnimationToggle } from "../components/Home/AnimationToggle";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { toggle } from "../state/darkmode/darkModeSlice";

export const Home = () => {
  const animationsToggled = useSelector(
    (state: RootState) => state.animations.toggled,
  );
  const darkModeToggled = useSelector(
    (state: RootState) => state.darkmode.toggled,
  );
  const dispatch = useDispatch();

  return (
    <>
      {
        <img
          src={`${darkModeToggled ? "/assets/images/TokyoStreet-2.png" : "/assets/images/TokyoStreet-1.png"}`}
          className="fixed top-0 h-full w-full object-cover"
        />
      }
      {darkModeToggled && (
        <img
          src="/assets/images/moon.png"
          className="fixed left-[55%] top-[12%] w-[5%] rounded-full hover:cursor-pointer"
          onClick={() => dispatch(toggle())}
        />
      )}
      <button
        className="absolute left-[36%] top-[33.4%] h-[3%] w-[3.6%] rounded-full"
        onClick={() => dispatch(toggle())}
      />
      <button
        className="absolute left-[40.2%] top-[34.8%] h-[1.8%] w-[2.2%] rounded-full"
        onClick={() => dispatch(toggle())}
      />
      <AnimationToggle />
      <section
        className={`pointer-events-none absolute inset-0 flex items-center transition-colors duration-300 ease-in ${
          darkModeToggled ? "bg-black/50" : "bg-black/40"
        }`}
      >
        <div className="ml-12 flex w-1/3 flex-col font-bold tracking-wide text-white">
          <div className="mb-3 flex items-end text-xl text-primary">
            {">"} HI, MY NAME IS {animationsToggled && <BlinkingCursor />}
          </div>
          <div className="text-6xl">KEVIN FENG</div>
          <div className="my-8 font-semibold leading-snug">
            I'm a Software Developer deeply interested in Web Development
            technologies. Currently, I most enjoy using{" "}
            {<span className="text-primary">TypeScript</span>} and{" "}
            {<span className="text-primary">React</span>}!
          </div>
          <div className="pointer-events-auto space-x-6">
            <Button onClick={() => console.log("PROJECTS")}>PROJECTS</Button>
            <Button onClick={() => console.log("BLOG")}>BLOG</Button>
          </div>
        </div>
        <ProfileLinks />
      </section>
    </>
  );
};
