import React from "react";

import SharedPageInner from "@/app/components/shared/page-inner/SharedPageInner";

export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SharedPageInner>
        <h2 className="text-center text-[2.33rem] pt-[1.337rem] pb-[5.773rem] font-bold">
          글 작성하기
        </h2>
        {children}
      </SharedPageInner>
    </>
  );
}
