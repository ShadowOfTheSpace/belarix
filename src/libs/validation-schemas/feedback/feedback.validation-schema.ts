import { z } from "zod";

const feedback = z.object({
  name: z
    .literal("")
    .or(
      z
        .string()
        .trim()
        .min(2, "Too short name.")
        .max(35, "Too long name.")
        .optional()
    ),
  companyName: z
    .literal("")
    .or(
      z
        .string()
        .trim()
        .min(2, "Too short company name.")
        .max(35, "Too long company name.")
        .optional()
    ),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Email is not valid."),
  phone: z.string().refine((value) => !value.includes("_"), "Phone number is not valid."),
  comments: z.string().max(200, "Max comments length is 200 symbols."),
  policyAgreement: z.coerce.boolean().refine((value) => value, {
    message: "The privacy policy agreement is required.",
  }),
});

export { feedback };
