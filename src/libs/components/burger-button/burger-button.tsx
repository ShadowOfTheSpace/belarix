import { motion } from "framer-motion";
import { cn } from "@libs/utils/utils";

type Properties = {
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton: React.FC<Properties> = ({ isOpen, onClick }) => {
  return (
    <button
      className={cn(
        "z-10 flex flex-col justify-center items-center gap-[5px] md:hidden rounded-[8px] w-[48px] h-[40px] transition-colors",
        isOpen ? "bg-bxm-main" : "bg-bxm-card"
      )}
      data-sidebar
      onClick={onClick}
    >
      <motion.span
        animate={{
          rotate: isOpen ? "-45deg" : 0,
          translateY: isOpen ? "6px" : 0,
          transition: { bounce: 0 },
        }}
        className="block bg-bxm-white w-[24px] h-[1px]"
      ></motion.span>
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1, transition: { duration: 0.15 } }}
        className="block bg-bxm-white ml-[4px] w-[20px] h-[1px]"
      ></motion.span>
      <motion.span
        animate={{
          rotate: isOpen ? "45deg" : 0,
          translateY: isOpen ? "-6px" : 0,
          transition: { bounce: 0 },
        }}
        className="block bg-bxm-white w-[24px] h-[1px]"
      ></motion.span>
    </button>
  );
};

export { BurgerButton };
