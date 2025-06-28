import React from "react";

import SharedPageInner from "@/app/components/shared/page-inner/SharedPageInner";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SharedPageInner>
        <h2 className="font-bold xxsm:text-[2.73rem] text-center text-[2.23rem] pt-[3.36rem] pb-[3.75rem]">
          회원 로그인
        </h2>
        {children}
      </SharedPageInner>
    </>
  );
}
