export const Footer = () => {
  return (
    <footer className="z-10 flex items-center bg-primary px-7 py-2 text-white md:px-5">
      <img
        alt=""
        src="/assets/icons/website-icon.png"
        className="mr-2 w-7 md:mr-1 md:w-6"
      />
      <h1 className="text-xl tracking-wide md:text-lg font-semibold">Reflectify</h1>
      <h4 className="ml-auto text-end text-xs md:text-[10px] font-semibold">
        Copyright © 2024 Kevin Feng
        <br />
        All Rights Reserved.
      </h4>
    </footer>
  );
};
