import React from "react";

export default function WriteInputFullWrapper({
  type,
  label,
  change,
  value,
}: {
  type: string;
  label: string;
  change: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
}) {
  return (
    <div className={`write-input-wrapper w-full flex flex-col`}>
      <label className="text-xl font-bold inline-block mb-[1rem]">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          className="p-[2rem] outline-none bg-[#F8F8F8] read-only:opacity-20"
          onChange={change}
          value={value}
        />
      ) : (
        <textarea
          className="w-full h-[200px] bg-[#f8f8f8] mb-[2rem] outline-none p-[2rem]"
          onChange={change}
          value={value}
        />
      )}
    </div>
  );
}
