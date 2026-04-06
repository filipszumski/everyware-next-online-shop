"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { Button } from "@/components";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="text"
      className="text-textDefault hover:bg-backgroundContrast"
      onClick={() => router.back()}
      icon={ChevronLeftIcon}
    />
  );
}
