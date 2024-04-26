import { ReactComponent as SparkleIcon } from "@assets/icons/sparkle.svg";

import { type IconName } from "@libs/types/types";

const iconNameToSvg: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  sparkle: SparkleIcon,
};

export { iconNameToSvg };
