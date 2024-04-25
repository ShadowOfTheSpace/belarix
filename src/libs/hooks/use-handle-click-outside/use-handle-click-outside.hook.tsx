import { useEffect } from "react";

type Properties = {
  condition: boolean;
  ignoringDataAttribute: string;
  onClick: () => void;
  ref: React.RefObject<HTMLElement>;
};

const useHandleClickOutside = ({
  condition,
  ignoringDataAttribute,
  onClick,
  ref,
}: Properties): void => {
  useEffect(() => {
    const handleClickOutside = ({
      target,
    }: MouseEvent | React.MouseEvent): void => {
      const isTargetNodeContains = ref.current?.contains(target as HTMLElement);
      const isTargetNode = target === ref.current;
      const hasIgnoringDataAttribute = Boolean(
        (target as HTMLElement).dataset[ignoringDataAttribute]
      );

      if (!isTargetNodeContains && !isTargetNode && !hasIgnoringDataAttribute) {
        onClick();
      }
    };

    if (condition) {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [condition, onClick, ref]);
};

export { useHandleClickOutside };
