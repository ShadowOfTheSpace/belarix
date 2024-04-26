import { Icon } from "@libs/components/components";
import { cn } from "@libs/utils/utils";

type Properties = {
  children: string;
  className?: string;
};

const AdvantageItem: React.FC<Properties> = ({ children, className }) => {
  return (
    <div className={cn("flex gap-x-[16px] items-center", className)}>
      <span className="flex justify-center items-center bg-bxm-card rounded-[10px] shrink-0 xs:size-[50px] size-[40px]">
        <Icon name="sparkle" className="xs:size-[27px] size-[21px]"/>
      </span>
      <p className="max-w-[234px] lg:max-w-[240px] text-[14px] text-bxm-gray xs:text-[16px] leading-[16px] md:leading-[20px]">
        {children}
      </p>
    </div>
  );
};

export { AdvantageItem };
