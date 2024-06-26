import advertising from "@assets/images/advertising-image.webp";
import blogger from "@assets/images/blogger-image.webp";
import employer from "@assets/images/employer-image.webp";
import pitches from "@assets/images/pitches-image.webp";
import startup from "@assets/images/startup-image.webp";
import { GalleryItem } from "./libs/components/components";

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center mt-[80px] xs:mt-[150px] px-[10px] sm:px-[20px] md:px-[40px] text-bxm-white"
    >
      <div className="w-full max-w-[1200px]">
        <h2 className="font-semibold text-[25px] text-end xs:text-[46px] uppercase leading-[30px] xs:leading-[56px] tracking-lighter xs:tracking-light">
          100+ Successful Projects Delivered
        </h2>
      </div>
      <div className="flex flex-wrap gap-x-[8px] gap-y-[40px] sm:gap-x-[30px] lg:gap-y-[70px] mt-[16px] xs:mt-[70px] w-full max-w-[1200px]">
        <div className="md:flex md:gap-x-[30px] contents">
          <GalleryItem
            alt="advertising"
            image={advertising}
            title="Advertising"
            className="max-w-[calc(50%-4px)] sm:max-w-[calc(50%-15px)]"
          />
          <GalleryItem
            alt="pitches"
            image={pitches}
            title="Pitches / Presentations"
            className="max-w-[calc(50%-4px)] sm:max-w-[calc(50%-15px)]"
          />
          <GalleryItem
            alt="employer"
            image={employer}
            title="Employer Branding"
          />
        </div>
        <div className="md:flex md:gap-x-[30px] contents">
          <GalleryItem alt="startup" image={startup} title="For Startups" />
          <GalleryItem
            alt="blogger"
            image={blogger}
            title="For Bloggers"
            className="max-w-[calc(50%-4px)] sm:max-w-[calc(50%-15px)]"
          />
        </div>
      </div>
    </section>
  );
};

export { Portfolio };
