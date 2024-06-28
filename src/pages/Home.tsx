import { useState } from "react";
import { Button } from "../components/common/Button";
import { ProfileLinks } from "../components/Home/ProfileLinks";
import { BlinkingCursor } from "../components/Home/BlinkingCursor";

export const Home = () => {
  const [canPlay, setCanPlay] = useState(false);

  return (
    <div className="">
      <video
        src="/assets/live-bg.mp4"
        className="fixed"
        autoPlay={true}
        loop
        muted
        preload="auto"
        onCanPlayThrough={() => setCanPlay(true)}
      />
      {canPlay ? (
        ""
      ) : (
        <img src="/assets/images/live-bg-blurred.jpg" className="fixed" />
      )}
      <div className="fixed h-screen w-screen bg-black/55" />
      <section className="absolute inset-0 flex items-center">
        <div className="ml-10 flex w-1/3 flex-col font-bold tracking-wide text-white">
          <div className="mb-3 flex items-end text-xl text-primary">
            HI, MY NAME IS <BlinkingCursor />
          </div>
          <div className="text-6xl">KEVIN FENG</div>
          <div className="my-8 font-semibold leading-snug">
            I'm a Software Developer deeply interested in Web Development
            technologies. Currently, I most enjoy using{" "}
            {<span className="text-primary">TypeScript</span>} and{" "}
            {<span className="text-primary">React</span>}!
          </div>
          <div className="space-x-6">
            <Button onClick={() => console.log("PROJECTS")}>PROJECTS</Button>
            <Button onClick={() => console.log("BLOG")}>BLOG</Button>
          </div>
        </div>
        <ProfileLinks />
      </section>
    </div>
  );
};
