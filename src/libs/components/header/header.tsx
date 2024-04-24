import { ReactComponent as Logo } from "../../../assets/icons/belarix-logo.svg";
import { Button } from "../button/button";
import { Link } from "../link/link";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center px-[40px] pt-[13px] pb-[19px] w-full">
      <div className="flex justify-between basis-[1200px]">
        <Link href="/">
          <Logo />
        </Link>
        <Navigation className="mt-[19px]" />
        <div className="flex gap-x-[27px] ml-[163px]">
          <Link
            className="mt-[19px] font-medium text-bxm-white hover:text-bxm-gray transition-colors"
            href="mailto:info@belarix.media"
          >
            info@belarix.media
          </Link>
          <Button>Contact Us</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
