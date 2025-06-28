"use client";

import React, { useEffect } from "react";

import { useLoading } from "@/app/context/LoadingContext";
import { usePathname } from "next/navigation";

export default function RootWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const { openLoading, closeLoading } = useLoading();

  useEffect(() => {
    openLoading();
    document.body.classList.add("whiteDim");
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeLoading();
      document.body.classList.remove("whiteDim");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [closeLoading, path]);

  return <>{children}</>;
}
