import { SEARCH_PARAMS_MAP } from "../constants";

export type SearchParamsValues =
  (typeof SEARCH_PARAMS_MAP)[keyof typeof SEARCH_PARAMS_MAP];
