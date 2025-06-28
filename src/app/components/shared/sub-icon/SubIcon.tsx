"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { MdHome } from "react-icons/md";

export default function SubIcon({ main }: { main: string }) {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <nav id="sub-icon" className="w-full flex xxxsm:justify-end justify-start">
      <ul className="inline-flex xxxsm:pt-0 pt-[2.2rem]">
        <li className="flex items-center">
          <button
            className="xxxsm:px-[0.995rem] pl-0 pr-[0.995rem] cursor-pointer relative after:content-[''] after:absolute after:w-[1px] after:h-[10px] after:bg-[rgba(0,0,0,.25)] after:right-0 after:top-0 after:bottom-0 after:my-auto after:mx-0"
            onClick={goHome}
          >
            <span className="sr-only">홈 버튼</span>
            <MdHome size={30} fill={"rgba(0,0,0,.25)"} />
          </button>
        </li>
        <li className="flex items-center">
          <button className="font-bold cursor-pointer text-xl text-[#AA2E29] px-[0.995rem]">
            {main}
          </button>
        </li>
      </ul>
    </nav>
  );
}
