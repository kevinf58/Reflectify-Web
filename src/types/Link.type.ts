export type LinkType = {
  onClick: () => void;
  bgColor: string;
  textColor: string;
  children: JSX.Element | string;
  underline?: string;
  vertical?: true;
};
