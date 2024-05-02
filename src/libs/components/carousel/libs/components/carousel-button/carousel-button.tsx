import { ReactComponent as LeftArrowIcon } from "@assets/icons/arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "@assets/icons/arrow-right.svg";
import { cn } from "@libs/utils/utils";
import { forwardRef } from "react";

type Properties = {
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  variant: "left" | "right";
};

const CarouselButton = forwardRef<HTMLButtonElement, Properties>(
  ({ className, onClick, variant, isDisabled = false }, ref) => {
    return (
      <button
        className={cn(
          "size-[42px] rounded-full bg-[#4F4F4F] flex justify-center items-center text-bxm-white active:bg-bxm-white active:text-bxm-black disabled:text-bxm-white/20 disabled:pointer-events-none transition-colors",
          className
        )}
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
        title={variant === "left" ? "Previous" : "Next"}
      >
        {variant === "left" ? <LeftArrowIcon /> : <RightArrowIcon />}
      </button>
    );
  }
);

export { CarouselButton };
