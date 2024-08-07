import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const ProfileLinks = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <aside
      className={`ml-auto flex flex-col items-center space-y-3 border-y-default border-l-default border-solid ${
        isDarkMode ? "border-primary bg-white" : "border-secondary bg-white"
      } z-10 px-1.5 py-2 shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)]`}
    >
      <a
        className="hover:cursor-pointer"
        href="https://github.com/kevinf58"
        target="_blank"
        title="GitHub"
      >
        <img src="/assets/icons/github.png" className="w-6" />
      </a>
      <a
        className="hover:cursor-pointer"
        href="https://www.linkedin.com/in/kfengg/"
        target="_blank"
        title="LinkedIn"
      >
        <img src="/assets/icons/linkedin.png" className="w-6" />
      </a>
      <a
        className="hover:cursor-pointer"
        href="mailto:kfeng58@uwo.ca"
        title="Email"
      >
        <img src="/assets/icons/email.png" className="w-6" />
      </a>
      <div className="h-0.5 w-5 bg-black" />
      <a className="hover:cursor-pointer" title="Resume">
        <img src="/assets/icons/resume.png" className="w-6" />
      </a>
    </aside>
  );
};
