import { useState } from "react";
import { Button } from "../components/common/Button";

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
      <div className="fixed h-screen w-screen bg-black/50" />
      <div className="h-screen" />
      <section className="absolute inset-0 ml-10 flex w-1/3 flex-col justify-center font-bold tracking-wide text-white">
        <div className="mb-3 text-xl tracking-wider text-primary">
          HI, MY NAME IS
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
      </section>

      <div className="relative text-white">More content here...</div>
    </div>
  );
};
