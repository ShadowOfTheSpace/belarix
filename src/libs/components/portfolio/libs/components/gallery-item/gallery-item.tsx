import { cn } from "@libs/utils/utils";

type Properties = {
  alt: string;
  className?: string;
  image: string;
  title: string;
};

const GalleryItem: React.FC<Properties> = ({
  alt,
  className,
  image,
  title,
}) => {
  return (
    <div className={cn("flex flex-col flex-grow", className)}>
      <img
        src={image}
        alt={alt}
        className="rounded-[5px] xs:rounded-[10px] object-cover"
      />
      <h4 className="mt-[10px] font-medium text-[18px] xs:text-[20px] leading-[22px] xs:leading-[24px] tracking-lighter xs:tracking-light">
        {title}
      </h4>
    </div>
  );
};

export { GalleryItem };
