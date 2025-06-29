import Link from "next/link";
import React from "react";

import styled from "styled-components";

const CSSLink = styled(Link)`
  @media screen and (min-width: 560px) {
    width: calc((100% - 1.25rem) / 2);
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export default function FAQWrapper() {
  return (
    <div
      id="faq-wrapper"
      className="xl:flex-1 flex-auto xl:w-auto w-full ml-5 flex xl:flex-col md:flex-row flex-col gap-5"
    >
      <CSSLink
        href="/"
        className="block bg-white xl:w-full w-full shadow-md rounded-xl p-5 flex md:flex-row flex-col items-center"
      >
        <img
          src="https://www.wooriwonmobile.com/static/media/img_s54_qna.c8916e7376794d52c4ba.png"
          alt="faq"
          width={70}
        />
        <div className="ml-3 flex flex-col xl:items-start items-center">
          <span className="font-bold md:text-[1.1rem] text-[0.95rem]">
            자주하는 질문
          </span>
          <span className="md:text-[1rem] text-[0.9rem]">
            궁금한 점을 한번에 해결!
          </span>
        </div>
      </CSSLink>
      <CSSLink
        href="/"
        className="block bg-white xl:w-full w-full shadow-md rounded-xl p-5 flex md:flex-row flex-col items-center"
      >
        <img
          src="https://www.wooriwonmobile.com/static/media/img_s54_usim.556e481ccbdde1ac7ebe.png"
          alt="usim"
          width={70}
        />
        <div className="ml-3 flex flex-col xl:items-start items-center">
          <span className="font-bold md:text-[1.1rem] text-[0.95rem]">
            유심 신청
          </span>
          <span className="md:text-[1rem] text-[0.9rem]">
            가입하기 전에 먼저 유심 신청!
          </span>
        </div>
      </CSSLink>
    </div>
  );
}
