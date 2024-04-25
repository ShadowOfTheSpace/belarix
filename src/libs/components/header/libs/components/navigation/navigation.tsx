import { Link } from "../../../../link/link";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";

type Properties = {
  className: string;
  onClick: () => void;
};

const Navigation: React.FC<Properties> = ({ className, onClick }) => {
  return (
    <nav className={className}>
      <ul className="flex md:flex-row flex-col gap-[16px] lg:gap-[30px]">
        {NAVIGATION_ITEMS.map((navigationItem) => {
          return (
            <li
              key={navigationItem.label}
              className="w-[calc(var(--nav-item-width) md:w-[var(--nav-item-width)] md:text-center + 10px]"
              style={
                {
                  "--nav-item-width": `${navigationItem.width}px`,
                } as React.CSSProperties
              }
            >
              <Link
                className="has-hover:hover:font-medium text-[18px] text-bxm-gray md:text-[16px] has-hover:hover:text-bxm-white no-hover:active:text-bxm-white uppercase tracking-light transition-colors"
                href={navigationItem.href}
                onClick={onClick}
              >
                {navigationItem.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navigation };
