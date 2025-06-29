import React from "react";
import Link from "next/link";
import { useLoading } from "@/app/context/LoadingContext";

export default function JoinAdvice() {
  const { openLoading } = useLoading();

  return (
    <div className="join__advice mt-[1.775rem] sm:max-w-[600px] xxsm:max-w-[400px] max-w-[300px] mx-auto flex xxsm:flex-row flex-col xxsm:justify-between justify-center gap-[1rem] items-center">
      <span>아직 회원이 아니신가요?</span>
      <Link
        href="/join"
        className="underline"
        onClick={() => {
          openLoading();
          document.body.classList.add("whiteDim");
        }}
      >
        회원가입 하러가기
      </Link>
    </div>
  );
}
