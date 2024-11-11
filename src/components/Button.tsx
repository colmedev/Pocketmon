import type { LinkItem } from "@contracts/index";

type ButtonProps = LinkItem & {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children, url }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      <a href={url}>{children}</a>
    </button>
  );
};
