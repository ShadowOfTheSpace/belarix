import { ReactComponent as Logo } from "@assets/icons/belarix-logo.svg";
import { Button, Link } from "@libs/components/components";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_TELEGRAM,
  CONTACT_WHATS_APP,
  DESIGNED,
} from "@libs/constants/constants";

import { AppRoute } from "@libs/enums/enums";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center bg-bxm-footer mt-[80px] xs:mt-[120px] s:mb-[60px] xs:mb-[20px] -ml-[10px] xs:ml-0 px-[10px] lg:px-[40px] xs:px-[40px] pt-[40px] lg:pt-[100px] pb-[40px] xs:pb-[23px] xs:rounded-[30px] w-screen xs:w-full">
      <div className="flex flex-col w-full max-w-[1200px]">
        <div className="flex s:flex-row flex-col justify-between gap-[40px] w-full">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[25px] text-balance text-bxm-white xs:text-[46px] uppercase leading-[30px] xs:leading-[56px] tracking-lighter xs:tracking-light">
              Need your Project to Stand Out?
            </h2>
            <h2 className="mt-[2px] xs:mt-0 font-semibold text-[25px] text-balance text-bxm-white xs:text-[46px] uppercase leading-[30px] xs:leading-[56px] tracking-lighter xs:tracking-light">
              Let’s Make a Difference Together!
            </h2>
            <p className="mt-[16px] xs:mt-[30px] text-[24px] text-bxm-gray leading-[29px]">
              Get in touch or leave your contacts to discuss your idea
            </p>
          </div>
          <Button variant="arrow" className="s:self-end shrink-0" />
        </div>
        <div className="flex justify-between border-y-[#505050] border-y-[1px] mt-[40px] xs:mt-[70px] pt-[25px] pb-[22px]">
          <div className="flex flex-col-reverse justify-between gap-y-[16px] s:contents">
            <Link
              href={`tel:${CONTACT_PHONE}`}
              className="text-[18px] text-bxm-white active:text-bxm-gray xs:text-[20px] leading-[24px] xs:leading-[27px] transition-colors"
            >
              {CONTACT_PHONE}
            </Link>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[18px] text-bxm-white active:text-bxm-gray xs:text-[20px] leading-[24px] xs:leading-[27px] transition-colors"
            >
              {CONTACT_EMAIL}
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-y-[16px] s:contents">
            <Link
              href={CONTACT_WHATS_APP}
              className="text-[18px] text-bxm-white active:text-bxm-gray xs:text-[20px] leading-[24px] xs:leading-[27px] transition-colors"
              isOpenInNewPage
            >
              WhatsApp
            </Link>
            <Link
              href={CONTACT_TELEGRAM}
              className="text-[18px] text-bxm-white active:text-bxm-gray xs:text-[20px] leading-[24px] xs:leading-[27px] transition-colors"
              isOpenInNewPage
            >
              Telegram
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[16px] xs:gap-[20px] mt-[40px] xs:mt-[118px] text-[12px] text-bxm-gray xs:text-[14px] leading-[16px] xs:leading-[19px]">
          <Link href="/" className="basis-full md:basis-auto">
            <Logo />
          </Link>
          <span className="md:ml-[17px] basis-full s:basis-auto">
            Copyright © 2024 Belarix media
          </span>
          <Link href={AppRoute.TERM_OF_USE} className="1xs:ml-[10px]">
            Term Of Use
          </Link>
          <Link href={AppRoute.PRIVACY_POLICY} className="ml-[16px] xs:ml-0">
            Privacy Policy
          </Link>
          <Link
            href={DESIGNED}
            className="ml-auto basis-full s:basis-auto"
            isOpenInNewPage
          >
            Designed
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
