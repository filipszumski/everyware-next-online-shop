import { SearchParamsValues } from "./searchParams";

export type PagePropsSearchParams = {
  searchParams: Promise<
    Record<SearchParamsValues, string | string[] | undefined>
  >;
};
