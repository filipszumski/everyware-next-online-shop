import { SkeletonElement } from "../SkeleteonElement";
import { Stars } from "./Stars";
import { RatingDisplayMode } from "./types";

type Props = {
  ratingValue: number;
  reviewCount: number;
  displayMode: RatingDisplayMode;
  isLoading?: boolean;
};

// TODO: SHOULD REUSABLE COMPONENT HANDLE LOADING STATE? OR SHOULD IT BE HANDLED BY PARENT COMPONENT?
export const Rating = ({
  ratingValue,
  reviewCount,
  displayMode,
  isLoading,
}: Props) => {
  if (isLoading) {
    // TODO: ADJUST LOADING TO DISPLAY MODE (size in case of icon skeleton and with scale skeleton)
    return <SkeletonElement className="w-48" />;
  }

  return (
    <div className="flex items-center">
      <Stars
        displayMode={displayMode}
        rating={ratingValue}
        interactionMode="static"
      />
      <div>
        <span>{ratingValue.toFixed(1)}</span>{" "}
        <span className="text-textSecondary">({reviewCount})</span>
      </div>
    </div>
  );
};
