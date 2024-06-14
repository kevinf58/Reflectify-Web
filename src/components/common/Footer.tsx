export const Footer = () => {
  return (
    <footer className="z-10 flex items-center bg-primary py-3 pr-7 font-medium text-white">
      <img
        alt=""
        src="/assets/icons/website-icon.png"
        className="mx-7 w-9 md:mx-5 md:w-7"
      />
      <h1 className="font-title text-3xl md:text-2xl">Reflectify</h1>
      <h4 className="ml-auto text-end text-xs md:text-[10px]">
        Copyright © 2024 Kevin Feng
        <br />
        All Rights Reserved.
      </h4>
    </footer>
  );
};
