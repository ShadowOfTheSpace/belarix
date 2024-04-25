import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { ReactComponent as Logo } from "../../../assets/icons/belarix-logo.svg";
import { CONTACT_EMAIL } from "../../constants/constants";
import { useHandleClickOutside } from "../../hooks/hooks";
import { BurgerButton } from "../burger-button/burger-button";
import { Button } from "../button/button";
import { Link } from "../link/link";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  const sidebarReference = useRef<null | HTMLDivElement>(null);
  const [isSidebarShown, setIsSidebarShown] = useState<boolean>(false);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarShown(!isSidebarShown);
  }, [isSidebarShown]);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarShown(false);
  }, []);

  const handleContactButtonClick = useCallback(() => {
    handleCloseSidebar();
  }, [handleCloseSidebar]);

  useHandleClickOutside({
    condition: isSidebarShown,
    onClick: handleCloseSidebar,
    ref: sidebarReference,
  });

  return (
    <header className="flex justify-center px-[10px] sm:px-[40px] pt-[16px] sm:pt-[13px] 1pb-0 pb-[19px] w-full">
      <div className="flex justify-between items-center md:items-start basis-[1200px]">
        <Link href="/">
          <Logo className="w-[80px] s:w-[130px] xs:w-[100px] h-[32px] s:h-[52px] xs:h-[40px]" />
        </Link>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isSidebarShown ? 0 : "100%" }}
          transition={{ bounce: 0 }}
          className="md:contents top-0 right-0 fixed flex flex-col justify-between bg-bxm-card px-[20px] pb-[40px] w-[min(100vw,278px)] h-dvh"
          ref={sidebarReference}
        >
          <Navigation
            className="mt-[96px] md:mt-[19px] self-start"
            onClick={handleCloseSidebar}
          />
          <div className="flex md:flex-row flex-col md:items-end gap-x-[27px] gap-y-[17px] lg:ml-[163px] md:h-full self-start">
            <Link
              className="md:mt-[19px] font-medium text-[14px] text-bxm-white md:text-[16px] has-hover:hover:text-bxm-gray no-hover:active:text-bxm-gray tracking-lighter transition-colors md:self-start"
              href="#"
            >
              info@belarix.media
            </Link>
            <Button onClick={handleContactButtonClick}>Contact Us</Button>
          </div>
        </motion.div>
        <BurgerButton isOpen={isSidebarShown} onClick={handleSidebarToggle} />
      </div>
    </header>
  );
};

export { Header };
