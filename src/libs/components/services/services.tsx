import serviceImage from "@assets/images/service-image.png";
import { ForWhomCard, MarkedList } from "./libs/components/components";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center mt-[80px] xs:mt-[155px] px-[10px] sm:px-[20px] md:px-[40px]"
    >
      <h2 className="font-semibold text-[25px] text-bxm-white text-center xs:text-[46px] xs:text-start uppercase xs:leading-[56px] tracking-lighter xs:tracking-light">
        You Will Benefit from Our Services
      </h2>
      <p className="mt-[16px] xs:mt-[20px] text-[18px] text-bxm-gray text-center xs:text-[20px] xs:leading-[24px]">
        Got an idea, but need help with the technical side?
      </p>
      <p className="text-[18px] text-bxm-gray text-center xs:text-[20px] xs:leading-[24px]">
        Want an engaging video, but lack ideas? We are here for you!
      </p>
      <div className="flex flex-wrap justify-center gap-[17px] md:gap-[30px] mt-[40px] xs:mt-[70px] max-w-[1200px]">
        <ForWhomCard title="Startups" iconName="triangle">
          <MarkedList
            items={[
              "Draw attention to your idea and bring it to life",
              "Stimulate discussion and investor interest",
              "Switch from old-fashioned PowerPoint to captivating video storytelling",
            ]}
          />
        </ForWhomCard>
        <img
          className="flex-grow rounded-[10px] min-w-[calc(50%-8.5px)] md:min-w-max max-h-[262px] md:max-h-[293px] object-cover"
          src={serviceImage}
          alt="service"
        />
        <ForWhomCard title="Large Companies" iconName="arch">
          <div className="flex flex-col gap-y-[20px] md:gap-y-[25px]">
            <MarkedList
              title="Marketing"
              items={["Develop impactful advertising campaigns"]}
            />
            <MarkedList
              title="HR, Employer Branding"
              items={["Enhance company image and employee loyalty"]}
            />
          </div>
        </ForWhomCard>
        <ForWhomCard
          className="gap-y-[54px]"
          title="Production Studios and Marketing Agencies"
          iconName="hexagon"
        >
          <MarkedList
            items={[
              "Outsource technical implementation",
              "Optimize budgets by reducing full-time employee expenses",
            ]}
          />
        </ForWhomCard>
        <ForWhomCard title="NGOs" iconName="flower">
          <MarkedList
            items={[
              "Highlight topical issues, react to the agenda",
              "Visualize ideas for social media and websites",
              "Showcase achievements and organize fundraising campaigns",
            ]}
          />
        </ForWhomCard>
        <ForWhomCard title="Bloggers" iconName="diamond">
          <MarkedList
            items={[
              "Promote and monetize your services/products",
              "Get quality content without worrying about technical aspects",
            ]}
          />
        </ForWhomCard>
      </div>
    </section>
  );
};

export { Services };
