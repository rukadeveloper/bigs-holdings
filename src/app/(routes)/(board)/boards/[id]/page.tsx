"use client";

import React from "react";

import useLoadDetails from "@/app/hooks/useLoadDetails";

import { useParams, useRouter } from "next/navigation";

type Data = {
  id: number;
  title: string;
  content: string;
  boardCategory: string;
  createdAt: string;
  imageUrl: string | null;
};

export default function DetailPage() {
  const { id } = useParams();

  const { data } = useLoadDetails(id);

  const router = useRouter();

  return (
    <>
      {Object.keys(data).length !== 0 && (
        <>
          <span className="text-[1.1rem]">
            {data.createdAt && data.createdAt.split("T")[0]}
            <b className="pl-2 font-normal">
              {data.createdAt &&
                data.createdAt.split("T")[1] &&
                data.createdAt.split("T")[1].split(".")[0]}
            </b>
          </span>
          <h2 className="pt-[1rem] font-bold text-[1.7rem] pb-[2.2rem] mb-[2.2rem] border-b border-solid border-black">
            {data.title}
          </h2>
          <p className="h-[calc(100vh_-_600px)] border-b border-solid border-[rgba(0,0,0,.85)]">
            {data.content}
          </p>
          <div className="index-button">
            <button
              className="w-[10rem] mx-auto mt-[1.8rem] block py-[1rem] bg-black text-white text-[1.1rem] font-bold rounded-[0.5rem]"
              onClick={() => {
                router.back();
              }}
            >
              목록
            </button>
          </div>
        </>
      )}
    </>
  );
}
