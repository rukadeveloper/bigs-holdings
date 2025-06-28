import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useLoading } from "@/app/context/LoadingContext";

export default function LogoLink() {
  const { openLoading } = useLoading();

  return (
    <h1 className="logo inline-block absolute left-[5%]">
      <Link
        href="/"
        onClick={() => {
          openLoading();
          document.body.classList.add("whiteDim");
        }}
      >
        <Image
          src={"/logo/CJ_logo.svg"}
          alt="logo"
          width={0}
          height={0}
          className={"w-[64px] h-auto"}
        />
      </Link>
    </h1>
  );
}
