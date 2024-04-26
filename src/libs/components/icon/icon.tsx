import { cn } from "@libs/utils/utils";
import { type IconName } from "@libs/types/types";
import { iconNameToSvg } from "./libs/maps/maps";

type Properties = {
  className?: string;
  name: IconName;
};

const Icon: React.FC<Properties> = ({ className, name }) => {
  const IconComponent = iconNameToSvg[name];

  return <IconComponent className={cn("shrink-0", className)} />;
};
export { Icon };
