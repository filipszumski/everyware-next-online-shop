import { LabelHTMLAttributes } from "react";

import { twMerge } from "@/shared/utilities/twMerge";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  error?: string;
  required?: boolean;
};

export const FloatingLabel = ({
  className,
  error,
  required,
  children,
  ...props
}: LabelProps) => {
  return (
    <label
      className={twMerge(
        `
          left-[0.25rem] top-0 -translate-y-1/2 px-1 text-xs bg-backgroundLight text-textSecondary absolute transition-all
          pointer-events-none
          disabled:text-disabled
          peer-placeholder-shown:left-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-5
          peer-focus:left-2 peer-focus:text-xs peer-focus:top-0
          `,
        className,
        {
          "text-error": !!error,
        },
      )}
      {...props}
    >
      {children}
      {required && "*"}
    </label>
  );
};
