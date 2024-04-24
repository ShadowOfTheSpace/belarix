import { ReactComponent as RightArrow } from "../../../assets/icons/right-arrow.svg";

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
          className="bg-white hover:bg-transparent px-[30px] py-[13px] rounded-[10px] font-medium text-bxm-black hover:text-bxm-white transition-colors duration-300"
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className="flex justify-center items-center bg-bxm-red hover:bg-bxm-white rounded-full text-bxm-white hover:text-bxm-black transition-colors duration-300 size-[100px]"
          onClick={onClick}
        >
          <RightArrow />
        </button>
      )}
    </>
  );
};

export { Button };
