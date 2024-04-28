import { AdvantageItem } from "./components/components";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-y-[40px] md:gap-y-[60px] lg:gap-y-[105px] mt-[80px] xs:mt-[150px]">
      <div className="flex lg:flex-row flex-col justify-between gap-x-[30px] gap-y-[16px] w-full max-w-[1200px]">
        <h2 className="max-w-[687px] font-semibold text-[25px] text-bxm-white xs:text-[46px] uppercase leading-[30px] xs:leading-[56px] tracking-light">
          We Create Effective and Engaging Videos for Your Business and You
        </h2>
        <div className="flex flex-col gap-y-[15px] max-w-[380px] font-normal text-[16px] text-bxm-white xs:text-[18px] leading-[19px] tracking-light lg:self-end xs:leading-[22px]">
          <p>
            Producing pitch videos, promo clips, full-scale commercials and
            films
          </p>
          <p>Bringing stories to life through animation</p>
        </div>
      </div>
      <div className="flex flex-wrap md:justify-between gap-[20px] w-full max-w-[1200px]">
        <AdvantageItem>
        Interactivity and immersion in video content
        </AdvantageItem>
        <AdvantageItem>Videos evoke deeper emotional reactions</AdvantageItem>
        <AdvantageItem className="xl:pr-[75px]">
          Videos become viral more easily and quickly
        </AdvantageItem>
      </div>
    </section>
  );
};

export { AboutUs };
