import { AnimatePresence, motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { ModalButton } from "./libs/components/components";

type Properties = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Properties> = ({ children, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <RemoveScroll>
            <motion.dialog
              aria-modal
              open={isOpen}
              className="top-[50%] z-30 fixed border-[#313131] bg-bxm-card px-[10px] py-[16px] s:p-[50px] xs:p-[30px] xs:border xs:rounded-[10px] xs:max-w-[calc(100%-60px)] h-full xs:h-auto xs:max-h-[90vh] translate-y-[-50%] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModalButton
                className="top-[16px] xs:top-[20px] right-[10px] xs:right-[20px] absolute"
                onClick={onClose}
              />
              <>{children}</>
            </motion.dialog>
          </RemoveScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-20 fixed bg-bxm-modal-background size-full"
            onClick={onClose}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export { Modal };
