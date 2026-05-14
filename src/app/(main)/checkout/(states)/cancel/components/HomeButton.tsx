"use client";

import { redirect } from "next/navigation";

import { Button } from "@/components";
import { APP_ROUTES } from "@/shared/constants/appRoutes";

export function HomeButton() {
  return (
    <Button onClick={() => redirect(APP_ROUTES.products)}>Go Shopping</Button>
  );
}
