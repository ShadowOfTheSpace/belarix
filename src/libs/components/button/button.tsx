import { ReactComponent as RightArrow } from "@assets/icons/right-arrow.svg";
import { cn } from "@libs/utils/utils";
import { motion } from "framer-motion";

type Properties = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "arrow";
  className?: string;
  type?: "button" | "submit";
  isPending?: boolean;
};

const Button: React.FC<Properties> = ({
  onClick,
  variant = "default",
  children,
  className,
  type = "button",
  isPending = false,
}) => {
  return (
    <>
      {variant === "default" ? (
        <button
          className={cn(
            "relative bg-white has-hover:hover:bg-transparent no-hover:active:bg-transparent px-[30px] py-[13px] rounded-[10px] w-[160px] md:w-auto font-medium text-[14px] text-bxm-black md:text-[16px] has-hover:hover:text-bxm-white no-hover:active:text-bxm-white leading-[normal] tracking-lighter transition-colors duration-300 disabled:hover:bg-bxm-white",
            className
          )}
          type={type}
          disabled={isPending}
          onClick={onClick}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isPending ? 0 : 1 }}
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isPending ? 1 : 0 }}
            className="absolute inset-0 border-[3px] m-auto border-t-transparent border-bxm-red rounded-full animate-spin size-[20px]"
          ></motion.div>
        </button>
      ) : (
        <button
          className={cn(
            "flex justify-center items-center bg-bxm-red has-hover:hover:bg-bxm-white no-hover:active:bg-bxm-white rounded-full text-bxm-white has-hover:hover:text-bxm-black no-hover:active:text-bxm-black transition-colors duration-300 md:size-[100px] size-[80px]",
            className
          )}
          onClick={onClick}
          title="Contact us"
        >
          <RightArrow className="w-[26px] md:w-[32px] h-[24px] md:h-[30px]" />
        </button>
      )}
    </>
  );
};

export { Button };
