import { Icon } from "@libs/components/components";
import { type IconName } from "@libs/types/types";
import { cn } from "@libs/utils/utils";

type Properties = {
  children: React.ReactNode;
  className?: string;
  iconName: IconName;
  title: string;
};

const ForWhomCard: React.FC<Properties> = ({
  children,
  className,
  iconName,
  title,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col md:justify-between border-[#313131] bg-bxm-card p-[20px] md:pr-[30px] md:pb-[30px] border rounded-[10px] basis-[380px] flex-grow lg:h-[293px] gap-y-[42px]",
        className
      )}
    >
      <div className="flex justify-between items-center xs:items-start w-full">
        <h3 className="md:mt-[11px] md:ml-[10px] max-w-[243px] font-medium text-[20px] text-bxm-white xs:text-[26px] leading-[24px] xs:leading-[29px] tracking-lighter md:tracking-light">
          {title}
        </h3>
        <span className="right-[20px] md:absolute flex justify-center items-center bg-bxm-main rounded-[10px] size-[40px] xs:size-[50px]">
          <Icon name={iconName} className="size-[32px] xs:size-[40px]" />
        </span>
      </div>
      {children}
    </div>
  );
};

export { ForWhomCard };
