import { cn } from "@libs/utils/utils";

type Properties = {
  className?: string;
  onClick?: () => void;
};

const ModalButton: React.FC<Properties> = ({ className, onClick }) => {
  return (
    <button
      className={cn(
        "relative bg-bxm-main w-[48px] h-[40px] rounded-[8px] has-hover:hover:opacity-70 no-hover:active:opacity-70 transition-opacity",
        className
      )}
      title="Close"
      onClick={onClick}
    >
      <span className="absolute inset-0 bg-bxm-white m-auto w-[20px] h-[1px] rotate-45"></span>
      <span className="absolute inset-0 bg-bxm-white m-auto w-[20px] h-[1px] -rotate-45"></span>
    </button>
  );
};

export { ModalButton };
