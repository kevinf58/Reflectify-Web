export const Link = (props: { text: string }) => {
  return (
    <button className="link-hover-animation">
      <span className="relative px-1">{props.text}</span>
    </button>
  );
};
