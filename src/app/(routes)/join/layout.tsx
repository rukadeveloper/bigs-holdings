import React from "react";

import SharedPageInner from "@/app/components/shared/page-inner/SharedPageInner";
import SubIcon from "@/app/components/shared/sub-icon/SubIcon";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SharedPageInner>
        <h2 className="font-bold xxsm:text-[3.53rem] text-[2.23rem] pt-[3.36rem]">
          회원가입
        </h2>
        <SubIcon main={"회원가입"} />
        {children}
      </SharedPageInner>
    </>
  );
};

export default layout;
