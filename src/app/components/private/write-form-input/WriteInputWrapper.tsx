"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import AccountStateStore from "@/app/store/AccountStateStore";

function WriteInputWrapper({
  type,
  label,
  htmlFor,
  isHalf,
  value,
}: {
  type: string;
  label: string;
  htmlFor: string;
  isHalf: boolean;
  value: string;
}) {
  return (
    <div
      className={`write-input-wrapper ${
        isHalf ? "ssm:w-[calc((100%_-_80px)/2)] w-full" : "w-full"
      } flex flex-col`}
    >
      <label
        htmlFor={htmlFor}
        className="text-xl font-bold inline-block mb-[1rem]"
      >
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        className="p-[2rem] outline-none bg-[#F8F8F8] read-only:opacity-20"
        value={value}
        readOnly
      />
    </div>
  );
}

export default observer(WriteInputWrapper);
