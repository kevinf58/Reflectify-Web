import { LinkType } from "../../types/Link.type";

export const Link = (props: LinkType) => {
  return (
    <a
      className={`relative w-min before:absolute ${
        props.bgColor ? props.bgColor : `before:bg-primary`
      } ${props.textColor ? props.textColor : `hover:text-white`} ${
        props.vertical
          ? `before:left-0 before:origin-left before:scale-x-[0] hover:before:scale-x-100`
          : `py-1 before:bottom-0 before:origin-bottom before:scale-y-[0] hover:before:scale-y-100`
      } before:h-full before:w-full before:transition-transform before:duration-200 before:ease-in-out hover:cursor-pointer ${
        props.underline ? `underline` : ``
      }`}
      onClick={props.onClick}
    >
      {<span className="relative px-1">{props.children}</span>}
    </a>
  );
};
