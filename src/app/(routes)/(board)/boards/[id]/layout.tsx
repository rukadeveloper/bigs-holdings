import React from "react";

import SharedPageInner from "@/app/components/shared/page-inner/SharedPageInner";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SharedPageInner>{children}</SharedPageInner>
    </>
  );
}
