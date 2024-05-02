import { ReactComponent as RightArrow } from "@assets/icons/right-arrow.svg";
import { cn } from "@libs/utils/utils";

type Properties = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "arrow";
  className?: string;
};

const Button: React.FC<Properties> = ({
  onClick,
  variant = "default",
  children,
  className,
}) => {
  return (
    <>
      {variant === "default" ? (
        <button
          className={cn(
            "bg-white has-hover:hover:bg-transparent no-hover:active:bg-transparent px-[30px] py-[13px] rounded-[10px] w-[160px] md:w-auto font-medium text-[14px] text-bxm-black md:text-[16px] has-hover:hover:text-bxm-white no-hover:active:text-bxm-white leading-[normal] tracking-lighter transition-colors duration-300",
            className
          )}
          onClick={onClick}
        >
          {children}
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
