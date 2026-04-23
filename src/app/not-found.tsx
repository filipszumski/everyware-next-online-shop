"use client";

import notFoundImage from "@static/illustrations/404.svg";

import { StateContainer } from "@/components/Layout/StateContainer";

export default function NotFound() {
  return (
    <StateContainer
      imageProps={notFoundImage}
      title="Error 404"
      description="Page was not found"
    />
  );
}
