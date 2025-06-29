"use client";

import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "../../ui/select";

import useLoadCategory from "@/app/hooks/useLoadCategory";
import { observer } from "mobx-react-lite";
import useLoadDetails from "@/app/hooks/useLoadDetails";

type Data = {
  id: number;
  title: string;
  content: string;
  boardCategory: string;
  createdAt: string;
  imageUrl: string | null;
};

function PatchSelector({
  value,
  setData,
}: {
  value: string;
  setData: Dispatch<SetStateAction<Data>>;
}) {
  useLoadCategory();

  const category = useLoadCategory();

  const setChange = (val: string) => {
    setData((prev) => ({ ...prev, boardCategory: val }));
  };

  return (
    <div id="select-wrapper" className="mt-[1.9rem]">
      <h2 className="pb-[0.4rem]">선택하기</h2>
      <Select
        value={value}
        onValueChange={(val) => {
          setChange(val);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="선택하기"></SelectValue>
        </SelectTrigger>
        <SelectContent className="z-[100000]">
          <SelectGroup>
            <SelectLabel>카테고리 선택</SelectLabel>
            {Object.entries(category).map(([keys, value]) => (
              <SelectItem value={keys} key={keys}>
                {keys}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default observer(PatchSelector);
