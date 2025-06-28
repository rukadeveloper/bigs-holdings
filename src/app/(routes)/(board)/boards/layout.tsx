import SharedPageInner from "@/app/components/shared/page-inner/SharedPageInner";
import SubIcon from "@/app/components/shared/sub-icon/SubIcon";
import React from "react";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SharedPageInner>
        <h2 className="pt-[3.775rem] font-bold lg:text-[1.95rem] text-[1.65rem]">
          게시판 보기
        </h2>
        <SubIcon main={"게시판 보기"} />
        {children}
      </SharedPageInner>
    </>
  );
}
