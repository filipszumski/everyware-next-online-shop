import { LocalStorageKeyValues } from "../constants/localStorageKeys";

export const getLocalStorageValue = <T>(
  key: LocalStorageKeyValues,
  fallback: T,
  dataValidationCallback: (
    localStorageValue: unknown,
  ) => localStorageValue is T,
) => {
  if (typeof window === "undefined") return fallback;

  const localStorageValue = localStorage.getItem(key);

  if (localStorageValue) {
    try {
      const parsedLocalStorageValue = JSON.parse(localStorageValue);
      if (dataValidationCallback(parsedLocalStorageValue)) {
        return parsedLocalStorageValue;
      }

      return fallback;
    } catch (err) {
      console.error("Error parsing local storage JSON value", err);
      return fallback;
    }
  }

  return fallback;
};
