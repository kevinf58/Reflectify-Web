export const ProfileLinks = () => {
  return (
    <aside className="ml-auto flex flex-col items-center space-y-3 border-y-default border-l-default border-solid border-primary bg-white px-1.5 py-2 shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <a
        className="hover:cursor-pointer"
        href="https://github.com/kevinf58"
        target="_blank"
      >
        <img src="/assets/icons/github.png" className="w-6" />
      </a>
      <a
        className="hover:cursor-pointer"
        href="https://www.linkedin.com/in/kfengg/"
        target="_blank"
      >
        <img src="/assets/icons/linkedin.png" className="w-6" />
      </a>
      <div className="h-0.5 w-5 bg-black" />
      <a className="hover:cursor-pointer">
        <img src="/assets/icons/resume.png" className="w-6" />
      </a>
    </aside>
  );
};
