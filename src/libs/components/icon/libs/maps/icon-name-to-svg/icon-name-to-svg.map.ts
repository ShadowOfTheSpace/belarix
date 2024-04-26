import { ReactComponent as ArchIcon } from "@assets/icons/arch.svg";
import { ReactComponent as DiamondIcon } from "@assets/icons/diamond.svg";
import { ReactComponent as FlowerIcon } from "@assets/icons/flower.svg";
import { ReactComponent as HexagonIcon } from "@assets/icons/hexagon.svg";
import { ReactComponent as TriangleIcon } from "@assets/icons/triangle.svg";
import { ReactComponent as SparkleIcon } from "@assets/icons/sparkle.svg";

import { type IconName } from "@libs/types/types";

const iconNameToSvg: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  arch: ArchIcon,
  diamond: DiamondIcon,
  flower: FlowerIcon,
  hexagon: HexagonIcon,
  triangle: TriangleIcon,
  sparkle: SparkleIcon,
};

export { iconNameToSvg };
