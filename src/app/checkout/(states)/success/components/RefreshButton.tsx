"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { Button } from "@/components";

export function RefreshButton() {
  const { refresh } = useRouter();

  return (
    <Button onClick={refresh} icon={ArrowPathIcon}>
      Refresh
    </Button>
  );
}
