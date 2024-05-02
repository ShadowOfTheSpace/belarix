import {
  Controller,
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { ReactComponent as CheckIcon } from "@assets/icons/check.svg";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@libs/utils/utils";

type Properties<T extends FieldValues> = {
  className?: string | undefined;
  control: Control<T, null>;
  errors: FieldErrors<T>;
  label: string;
  name: FieldPath<T>;
};

const Checkbox = <T extends FieldValues>({
  control,
  errors,
  label,
  name,
  className,
}: Properties<T>): JSX.Element => {
  const error = errors[name]?.message;
  const hasError = Boolean(error);

  return (
    <label className={cn("flex flex-wrap items-center gap-[10px]", className)}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return (
            <CheckboxPrimitive.Root
              className="border-[#313131] data-[state=checked]:bg-bxm-main border has-hover:hover:border-bxm-white no-hover:active:border-bxm-white rounded-[4px] text-bxm-white transition-colors shrink-0 size-[24px]"
              checked={value}
              onCheckedChange={onChange}
            >
              <CheckboxPrimitive.Indicator className="flex justify-center items-center">
                <CheckIcon className="w-4 h-4" />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
          );
        }}
      />
      <span className="text-[14px] text-bxm-gray leading-[19px]">{label}</span>
      {hasError && (
        <span className="mt-[10px] mb-[20px] text-[12px] text-bxm-red leading-[12px] basis-full">
          {error as string}
        </span>
      )}
    </label>
  );
};

export { Checkbox };
