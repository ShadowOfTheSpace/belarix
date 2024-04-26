type Properties = {
  items: string[];
  title?: string;
};
const MarkedList: React.FC<Properties> = ({ items, title }) => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      {title && (
        <h4 className="md:ml-[10px] text-bxm-white md:text-[18px] leading-[22px]">
          {title}
        </h4>
      )}
      <ul className="flex flex-col gap-y-[15px] pl-[15px] md:pl-[27px] max-w-[287px] xs:max-w-max text-[14px] text-bxm-gray xs:text-[16px] leading-[17px] xs:leading-[19px] list-disc">
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export { MarkedList };
