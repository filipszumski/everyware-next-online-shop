"use client";
import { MouseEvent, SVGProps, useState } from "react";

import { RATING_SCALE } from "@/shared/constants/ratingScale";
import { twMerge } from "@/shared/utilities/twMerge";

import { DATA_STAR_NUMBER_ATTRIBUTE_NAME } from "./constants";
import { StarIcon } from "./StarIcon";
import { RatingDisplayMode } from "./types";

type InteractiveStarsProps = {
  interactionMode: "interactive";
  onClick: (rating: number) => void;
};

type StaticStarsProps = {
  interactionMode: "static";
  onClick?: undefined;
};

type StarsProps = InteractiveStarsProps | StaticStarsProps;

type Props = Omit<SVGProps<SVGElement>, "onClick"> &
  StarsProps & {
    displayMode: RatingDisplayMode;
    rating: number;
  };

export const Stars = ({
  rating,
  displayMode,
  className,
  interactionMode,
  onClick,
}: Props) => {
  const [hoveredStartIndex, setHoveredStarIndex] = useState(0);

  const fillRatio = rating % 1;
  const fullStars = Math.floor(rating);

  if (displayMode === "icon") {
    return <StarIcon fillRatio={1} />;
  }

  const handleMouseEnter = (e: MouseEvent<SVGElement>) => {
    if (interactionMode === "static") return;

    const target = e.target as HTMLElement;
    const starNumber = Number(
      target.getAttribute(DATA_STAR_NUMBER_ATTRIBUTE_NAME),
    );

    if (starNumber) {
      setHoveredStarIndex(starNumber);
    }
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (interactionMode === "static") return;

    const target = e.target as HTMLElement;
    const starNumber = Number(
      target.getAttribute(DATA_STAR_NUMBER_ATTRIBUTE_NAME),
    );

    if (starNumber && onClick) {
      onClick(starNumber);
    }
  };

  return (
    <div
      className="flex items-center gap-1"
      onClick={handleClick}
      onMouseLeave={() => {
        if (interactionMode === "interactive") {
          setHoveredStarIndex(0);
        }
      }}
    >
      {Array.from({ length: RATING_SCALE }, (_v, index) => {
        const starNumber = index + 1;
        const isStarHovered = hoveredStartIndex >= starNumber;

        if (index < fullStars) {
          return (
            <StarIcon
              key={index}
              fillRatio={1}
              className={className}
              starNumber={index + 1}
              onMouseEnter={handleMouseEnter}
            />
          );
        }
        if (index === fullStars && fillRatio > 0) {
          return (
            <StarIcon
              key={index}
              fillRatio={fillRatio}
              className={className}
              starNumber={index + 1}
            />
          );
        }
        return (
          <StarIcon
            key={index}
            fillRatio={isStarHovered ? 1 : 0}
            className={twMerge(className, {
              "text-yellow-200": isStarHovered,
            })}
            starNumber={index + 1}
            onMouseEnter={handleMouseEnter}
          />
        );
      })}
    </div>
  );
};
