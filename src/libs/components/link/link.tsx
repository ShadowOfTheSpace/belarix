import { NavLink } from "react-router-dom";

type Properties = {
  children: React.ReactNode;
  className?: string;
  href: string;
  isOpenInNewPage?: boolean;
  onClick?: () => void;
  title?: string;
};

const Link: React.FC<Properties> = ({
  children,
  className,
  href,
  isOpenInNewPage = false,
  onClick,
  title,
}) => {
  return (
    <NavLink
      className={className}
      to={href}
      target={isOpenInNewPage ? "_blank" : undefined}
      rel="noreferrer"
      onClick={onClick}
      title={title}
    >
      {children}
    </NavLink>
  );
};

export { Link };
