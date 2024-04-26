import { ReactComponent as RightArrow } from "@assets/icons/right-arrow.svg";

type Properties = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "arrow";
};

const Button: React.FC<Properties> = ({
  onClick,
  variant = "default",
  children,
}) => {
  return (
    <>
      {variant === "default" ? (
        <button
          className="bg-white has-hover:hover:bg-transparent no-hover:active:bg-transparent px-[30px] py-[13px] rounded-[10px] w-[160px] md:w-auto font-medium text-[14px] text-bxm-black md:text-[16px] has-hover:hover:text-bxm-white no-hover:active:text-bxm-white leading-[normal] tracking-lighter transition-colors duration-300"
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className="flex justify-center items-center bg-bxm-red has-hover:hover:bg-bxm-white no-hover:active:bg-bxm-white rounded-full text-bxm-white has-hover:hover:text-bxm-black no-hover:active:text-bxm-black transition-colors duration-300 size-[100px]"
          onClick={onClick}
        >
          <RightArrow />
        </button>
      )}
    </>
  );
};

export { Button };
