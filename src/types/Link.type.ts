export type LinkType = {
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  children: JSX.Element | string;
  underline?: boolean;
  vertical?: boolean;
};
