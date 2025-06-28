import React, { ChangeEvent, useRef, useState } from "react";

export default function WriteFileWrapper({
  setFiling,
  files,
}: {
  setFiling: (file: File | null) => void;
  files: File | null;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const buttonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="file-wrapper xl:w-[calc((100%_-_80px)/2)] w-full mb-[2rem]">
      <h2 className="text-xl font-bold inline-block mb-[1rem]">첨부 파일</h2>
      <input
        type="file"
        id="file"
        className="sr-only"
        ref={inputRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files[0]) {
            setFiling(e.target.files[0]);
          }
        }}
      />
      <label htmlFor="file" className="flex sm:flex-row flex-col">
        <p className="bg-[#f9f9f9] py-[1.125rem] px-[1.775rem] h-[5rem] flex-1 flex justify-start font-bold items-center text-[#ccc]">
          {!files ? "파일 선택" : files.name}
        </p>
        <button
          className="sm:w-[200px] w-full sm:py-0 py-6 sm:mt-0 mt-3 bg-black text-white font-bold cursor-pointer"
          type="button"
          onClick={buttonClick}
        >
          파일 찾기
        </button>
      </label>
    </div>
  );
}
