import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { ReactComponent as Logo } from "@assets/icons/belarix-logo.svg";
import { CONTACT_EMAIL } from "@libs/constants/constants";
import { useHandleClickOutside } from "@libs/hooks/hooks";
import { BurgerButton, Button, Link } from "@libs/components/components";
import { Navigation } from "./libs/components/components";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@libs/enums/enums";
import { RemoveScroll } from "react-remove-scroll";

const Header: React.FC = () => {
  const navigate = useNavigate();

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
    navigate(AppRoute.CONTACT_US);
  }, [navigate, handleCloseSidebar]);

  useHandleClickOutside({
    condition: isSidebarShown,
    ignoringDataAttribute: "sidebar",
    onClick: handleCloseSidebar,
    ref: sidebarReference,
  });

  return (
    <header className="top-0 z-20 sticky flex justify-center bg-bxm-main px-[10px] sm:px-[20px] md:px-[40px] pt-[16px] sm:pt-[13px] pb-[16px] sm:pb-[13px] w-screen xs:w-full">
      <div className="flex justify-between items-center md:items-start basis-[1200px]">
        <Link href="/belarix" title="Belarix Media">
          <Logo className="w-[80px] s:w-[130px] xs:w-[100px] h-[32px] s:h-[52px] xs:h-[40px]" />
        </Link>
        <RemoveScroll enabled={isSidebarShown} forwardProps>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isSidebarShown ? 0 : "100%" }}
            transition={{ bounce: 0 }}
            className="md:contents top-0 right-0 z-10 fixed flex flex-col justify-between gap-y-[17px] bg-bxm-card px-[20px] pb-[40px] w-[min(100vw,278px)] h-dvh overflow-auto"
            ref={sidebarReference}
          >
            <Navigation
              className="mt-[96px] md:mt-[19px] self-start"
              onClick={handleCloseSidebar}
            />
            <div className="flex md:flex-row flex-col md:items-end gap-x-[27px] gap-y-[17px] lg:ml-[163px] md:h-full self-start">
              <Link
                className="md:mt-[19px] font-medium text-[14px] text-bxm-white md:text-[16px] has-hover:hover:text-bxm-gray no-hover:active:text-bxm-gray tracking-lighter transition-colors md:self-start"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </Link>
              <Button onClick={handleContactButtonClick}>Contact Us</Button>
            </div>
          </motion.div>
        </RemoveScroll>
        <AnimatePresence>
          {isSidebarShown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 md:hidden bg-bxm-modal-background"
            />
          )}
        </AnimatePresence>
        <BurgerButton isOpen={isSidebarShown} onClick={handleSidebarToggle} />
      </div>
    </header>
  );
};

export { Header };
