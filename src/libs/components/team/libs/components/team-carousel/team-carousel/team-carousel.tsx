import { TEAM_MEMBERS } from "../../../constants/constants";
import { TeamMemberPreview } from "../../components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@libs/components/components";

const TeamCarousel: React.FC = () => {
  return (
    <div className="relative md:flex max-w-[1200px]">
      <Carousel className="flex flex-col" opts={{ align: "start" }}>
        <div className="-top-[calc(77px+42px)] right-0 absolute s:flex gap-[15px] hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent className="flex -ml-[8px] md:-ml-[30px] cursor-grab active:cursor-grabbing">
          {TEAM_MEMBERS.map((teamMember, index) => {
            return (
              <CarouselItem
                key={`${teamMember.name}-${index}`}
                className={
                  "pl-[8px] md:pl-[30px] lg:basis-1/4 s:basis-1/3 xs:basis-1/2 basis-full"
                }
              >
                <TeamMemberPreview teamMember={teamMember} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { TeamCarousel };
