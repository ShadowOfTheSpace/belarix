import { cn } from "@libs/utils/utils";

type Properties = {
  className?: string;
  title: string;
  step: string;
  description: string;
};

const StepCard: React.FC<Properties> = ({
  className,
  description,
  step,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-[50px] xs:gap-y-[85px] text-bxm-white p-[20px] xs:p-[30px] rounded-[10px]",
        className
      )}
    >
      <h3 className="flex justify-between font-medium text-[20px] xs:text-[24px] leading-[24px] xs:leading-[29px] tracking-lighter xs:tracking-light">
        {title} <span>{step}</span>
      </h3>
      <p className="text-[14px] xs:text-[16px] leading-[17px] xs:leading-[19px]">
        {description}
      </p>
    </div>
  );
};

export { StepCard };