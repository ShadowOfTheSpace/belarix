import emailjs from "@emailjs/browser";
import { Button, Checkbox, Input, Modal } from "@libs/components/components";
import { AppRoute } from "@libs/enums/enums";
import { useAppForm } from "@libs/hooks/hooks";
import { Feedback } from "@libs/types/types";
import { feedbackValidationSchema } from "@libs/validation-schemas/validation-schemas";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactUsModal: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isContactUsModalOpen = pathname === AppRoute.CONTACT_US;

  const [modalState, setModalState] = useState<"in-progress" | "success">(
    "in-progress"
  );

  const [emailIsSending, setEmailIsSending] = useState(false);

  const handleModalClose = useCallback(() => {
    navigate(AppRoute.ROOT);
  }, [navigate]);

  const { control, errors, handleSubmit, reset } = useAppForm<Feedback>({
    defaultValues: {
      comments: "",
      companyName: "",
      email: "",
      name: "",
      phone: "",
      policyAgreement: false,
    },
    validationSchema: feedbackValidationSchema,
  });

  const handleSendEmail = useCallback(
    async ({ comments, companyName, email, name, phone }: Feedback) => {
      setEmailIsSending(true);
      emailjs.init({ publicKey: "WVSs5dr5Y0wU7GGEC" });
      emailjs
        .send("service_76783xa", "template_pbq0rak", {
          comments,
          companyName,
          email,
          name,
          phone,
        })
        .then(() => {
          setEmailIsSending(false);
          setModalState("success");
        });
    },
    []
  );

  useEffect(() => {
    reset();
    setModalState("in-progress");
  }, [reset, pathname]);

  return (
    <Modal isOpen={isContactUsModalOpen} onClose={handleModalClose}>
      <div className="relative">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: modalState === "success" ? "-110%" : 0 }}
          transition={{ bounce: 0 }}
          className="flex flex-col mt-[50px] xs:mt-0 max-h-[calc(100dvh-80px)] xs:max-h-[calc(90dvh-100px)]"
        >
          <h2 className="xs:mr-[62px] max-w-[607px] font-semibold text-[25px] text-bxm-white md:text-[46px] xs:text-[30px] uppercase leading-[30px] md:leading-[55px] xs:leading-[36px] tracking-lighter xs:tracking-light">
            Leave your details, and we will contact you as soon as possible
          </h2>
          <form
            className="flex flex-col mt-[16px] xs:mt-[30px] pr-[5px] xs:pr-[18px] overflow-auto"
            onSubmit={handleSubmit(handleSendEmail)}
          >
            <Input
              control={control}
              errors={errors}
              name="name"
              placeholder="Your name"
            />
            <Input
              control={control}
              errors={errors}
              name="companyName"
              placeholder="Company name"
            />
            <Input
              control={control}
              errors={errors}
              name="email"
              placeholder="E-mail*"
            />
            <Input
              control={control}
              errors={errors}
              name="phone"
              placeholder="Phone"
              mask="+370 999-99-999"
              maskChar="_"
            />
            <Input
              control={control}
              errors={errors}
              name="comments"
              placeholder="Comments"
              rows={3}
              className="shrink-0"
            />
            <Checkbox
              control={control}
              errors={errors}
              label="I agree with the privacy policy"
              name="policyAgreement"
              className="mt-[30px]"
            />
            <Button
              className="mt-[40px] xs:mt-[50px] xs:max-w-fit"
              type="submit"
              isPending={emailIsSending}
            >
              Submit
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{
            x: modalState === "success" ? 0 : "100%",
          }}
          transition={{ bounce: 0 }}
          className="top-0 absolute flex flex-col justify-center items-center size-full"
        >
          <h2 className="font-semibold text-[25px] text-bxm-white text-center md:text-[46px] xs:text-[30px] uppercase leading-[30px] md:leading-[55px] xs:leading-[36px] tracking-lighter xs:tracking-light">
            Thank you!
          </h2>
          <h2 className="xxs:max-w-[72%] font-semibold text-[25px] text-balance text-bxm-white text-center md:text-[46px] xs:text-[30px] uppercase leading-[30px] md:leading-[55px] xs:leading-[36px] tracking-lighter xs:tracking-light">
            Your request has been submitted
          </h2>
          <p className="mt-[16px] xs:mt-[20px] text-[18px] text-bxm-gray text-center leading-[22px]">
            We will contact you very soon
          </p>
        </motion.div>
      </div>
    </Modal>
  );
};

export { ContactUsModal };
