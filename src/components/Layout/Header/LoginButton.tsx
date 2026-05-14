"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/Button";

export function LoginButton() {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <Button
        variant={"text"}
        onClick={() => signOut()}
        icon={ArrowLeftStartOnRectangleIcon}
      >
        <span className="hidden sm:inline">Logout</span>
      </Button>
    );
  }

  return (
    <Button
      variant={"text"}
      onClick={() => signIn()}
      icon={ArrowRightEndOnRectangleIcon}
    >
      <span className="hidden sm:inline">Login</span>
    </Button>
  );
}
