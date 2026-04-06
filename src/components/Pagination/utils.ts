import { Url } from "next/dist/shared/lib/router/router";

type ForwardButtonProps = {
  direction: "forward";
  limit: number;
};

type BackwardButtonProps = {
  direction: "backward";
};

type GetDisabledButtonClassArgs = (ForwardButtonProps | BackwardButtonProps) & {
  currentPage: number;
};

export const getDisabledButtonClass = (args: GetDisabledButtonClassArgs) => {
  if (args.direction === "forward") {
    const { limit, currentPage } = args;

    const isForwardButtonUnavailable = (currentPage: number, limit: number) =>
      currentPage >= limit;

    return {
      "pointer-events-none": isForwardButtonUnavailable(currentPage, limit),
    };
  }
  const isBackButtonUnavailable = (currentPage: number) => currentPage === 1;

  return {
    "pointer-events-none": isBackButtonUnavailable(args.currentPage),
  };
};

export const getFirstPageNumber = (
  currentPageNumber: number,
  pageCount: number,
  pageButtonsCount: number,
) => {
  // INFO
  // first argument of returned function is calculating what page number should be first in pagination based on current page and number of visible page buttons
  // after last page based of page limit is visible the second argument is limiting extending page button numbers over pageCount
  return Math.min(
    Math.max(currentPageNumber - Math.floor(pageButtonsCount / 2), 1),
    pageCount + 1 - pageButtonsCount,
  );
};

export const getPageLink = (pathname: string, page: number): Url => {
  return `${pathname}/${page}`;
};
