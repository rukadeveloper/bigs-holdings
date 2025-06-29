"use client";

import { useLoading } from "@/app/context/LoadingContext";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

function PatchInput({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <div className="patch__input mt-[1.9rem] text-[0.9rem] font-bold">
      <h2>{label}</h2>
      {label !== "글 내용" ? (
        <input
          className="bg-[#F7F8FC] outline-none mt-[0.8rem] p-[0.7rem] w-full border-b-2 border-solid border-[#1F67F2]"
          value={value}
          onChange={change}
        />
      ) : (
        <textarea
          className="bg-[#F7F8FC] outline-none mt-[0.8rem] p-[0.7rem] w-full border-b-2 border-solid border-[#1F67F2] h-[200px] resize-none"
          value={value}
          onChange={change}
        />
      )}
    </div>
  );
}

export default observer(PatchInput);
