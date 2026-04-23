import { APP_ROUTES } from "../constants";

export type AppRoutes = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
