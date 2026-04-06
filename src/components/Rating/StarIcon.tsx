import { SVGProps, useId } from "react";
import { z } from "zod";

import { twMerge } from "@/shared/utilities/twMerge";

import { DATA_STAR_NUMBER_ATTRIBUTE_NAME } from "./constants";

type Props = SVGProps<SVGElement> & {
  fillRatio: number;
  starNumber?: number;
};

const validateFillRatio = (fillRatio: number) => {
  const fillRatioSchema = z.number().min(0).max(1);

  try {
    const parseResult = fillRatioSchema.parse(fillRatio);
    return parseResult;
  } catch {
    console.error("'fillRatio' prop must be a value from 0 to 1");
    return 0;
  }
};

export const StarIcon = ({
  fillRatio,
  className,
  starNumber,
  onMouseEnter,
}: Props) => {
  const gradientId = useId();
  const parsedFillRatio = validateFillRatio(fillRatio);

  const dataAttributes = {
    [DATA_STAR_NUMBER_ATTRIBUTE_NAME]: starNumber,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        fill: "currentColor",
        stroke: "var(--border)",
        strokeWidth: 1,
      }}
      className={twMerge("w-6 h-6 text-yellow-400", className)}
      onMouseEnter={onMouseEnter}
      {...dataAttributes}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset={parsedFillRatio}
            stopColor="currentColor"
            stopOpacity="1"
          />
          <stop
            offset={parsedFillRatio}
            stopColor="currentColor"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        {...dataAttributes}
      />
    </svg>
  );
};
