type Properties = {
  children: React.ReactNode;
  className?: string;
  href: string;
  isOpenInNewPage?: boolean;
  onClick?: () => void;
};

const Link: React.FC<Properties> = ({
  children,
  className,
  href,
  isOpenInNewPage = false,
  onClick,
}) => {
  return (
    <a
      className={className}
      href={href}
      target={isOpenInNewPage ? "_blank" : undefined}
      rel="noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export { Link };
