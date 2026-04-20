"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { Button } from "@/components";
import { APP_ROUTES } from "@/shared/constants/appRoutes";

export function HomeButton() {
  const { replace } = useRouter();

  return (
    <Button onClick={() => replace(APP_ROUTES.home)} icon={HomeIcon}>
      Go Home
    </Button>
  );
}
