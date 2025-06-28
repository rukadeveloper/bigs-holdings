"use client";

import React from "react";

export default function HeaderInner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="header-inner max-w-[90%] mx-auto h-full flex justify-end items-center">
      {children}
    </div>
  );
}
