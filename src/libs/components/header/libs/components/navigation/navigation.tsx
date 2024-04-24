import { Link } from "../../../../link/link";
import { NAVIGATION_ITEMS } from "./libs/constants/constants";

type Properties = {
  className: string;
};

const Navigation: React.FC<Properties> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex gap-x-[30px]">
        {NAVIGATION_ITEMS.map((navigationItem) => {
          return (
            <li
              key={navigationItem.label}
              className="text-center"
              style={{ width: `${navigationItem.width}px` }}
            >
              <Link
                className="hover:font-medium text-bxm-gray hover:text-bxm-white uppercase tracking-light transition-colors"
                href={navigationItem.href}
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
