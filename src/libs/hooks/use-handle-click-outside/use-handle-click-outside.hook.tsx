import { useEffect } from "react";

type Properties = {
  condition: boolean;
  onClick: () => void;
  ref: React.RefObject<HTMLElement>;
};

const useHandleClickOutside = ({
  condition,
  onClick,
  ref,
}: Properties): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | React.MouseEvent): void => {
      const hasTargetNode = (event.target as Node).contains(ref.current);
      const isTargetNode = event.target === ref.current;

      if (hasTargetNode && !isTargetNode) {
        onClick();
        console.log("click");
      }
    };

    if (condition) {
      document.addEventListener("click", handleClickOutside);
      console.log("add");
      return () => {
        document.removeEventListener("click", handleClickOutside);
        console.log("remove");
      };
    }
  }, [condition, onClick, ref]);
};

export { useHandleClickOutside };
