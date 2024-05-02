import { cn } from "@libs/utils/utils";
import {
  Controller,
  useController,
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import InputMask from "react-input-mask";

type Properties<T extends FieldValues> = {
  className?: string;
  control: Control<T, null>;
  errors: FieldErrors<T>;
  name: FieldPath<T>;
  placeholder?: string;
  rows?: number;
  type?: "email" | "text";
  mask?: string;
  maskChar?: string;
};

const Input = <T extends FieldValues>({
  className,
  control,
  errors,
  name,
  placeholder = "",
  rows,
  type = "text",
  mask,
  maskChar,
}: Properties<T>): JSX.Element => {
  const { field } = useController({ control, name });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  const isTextArea = Boolean(rows);

  const hasMask = Boolean(mask && maskChar);

  return (
    <>
      {isTextArea ? (
        <textarea
          className={cn(
            "border-[#505050] border-y bg-bxm-card py-[16px] xs:py-[20px] text-[18px]  xs:text-[20px] text-bxm-gray leading-[22px] xs:leading-[27px] outline-none resize-none focus:text-bxm-white focus:border-y-bxm-white focus:placeholder:text-transparent autofill:border-y-bxm-white",
            className,
            hasError && "border-bxm-red"
          )}
          {...field}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <>
          {hasMask ? (
            <Controller
              name={name}
              control={control}
              render={({ field: { ref, ...rest } }) => {
                return (
                  <InputMask
                    mask={mask as string}
                    maskChar={maskChar}
                    placeholder={placeholder}
                    className={cn(
                      "border-[#505050] border-y bg-bxm-card pt-[16px] pb-[20px] xs:py-[20px] text-[18px] xs:text-[20px] xs:leading-[27px] text-bxm-gray leading-[22px] outline-none focus:text-bxm-white focus:border-y-bxm-white focus:placeholder:text-transparent autofill:border-y-bxm-white",
                      hasError && "border-bxm-red"
                    )}
                    {...rest}
                  />
                );
              }}
            />
          ) : (
            <input
              className={cn(
                "border-[#505050] border-y bg-bxm-card pt-[16px] pb-[20px] xs:py-[20px] text-[18px] xs:text-[20px] text-bxm-gray leading-[22px] xs:leading-[27px] outline-none focus:text-bxm-white focus:border-y-bxm-white focus:placeholder:text-transparent autofill:border-y-bxm-white",
                hasError && "border-bxm-red"
              )}
              {...field}
              placeholder={placeholder}
              type={type}
            />
          )}
        </>
      )}
      {hasError && (
        <span className="mt-[10px] mb-[20px] text-[12px] text-bxm-red leading-[12px]">
          {error as string}
        </span>
      )}
    </>
  );
};

export { Input };
