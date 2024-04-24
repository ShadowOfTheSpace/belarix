type Properties = {
  children: React.ReactNode;
  className?: string;
  href: string;
  isOpenInNewPage?: boolean;
};

const Link: React.FC<Properties> = ({
  children,
  className,
  href,
  isOpenInNewPage = false,
}) => {
  return (
    <a
      className={className}
      href={href}
      target={isOpenInNewPage ? "_blank" : undefined}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export { Link };
