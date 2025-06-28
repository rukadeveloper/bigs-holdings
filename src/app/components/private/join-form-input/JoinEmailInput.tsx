"use client";

import React, { useState } from "react";
import JoinEmailSelect from "./JoinEmailSelect";
import JoinErrorMessage from "./JoinErrorMessage";
import JoinStateStore from "@/app/store/JoinStateStore";
import { observer } from "mobx-react-lite";

function JoinEmailInput({
  type,
  changeOne,
  blurOne,
  valueOne,
  errorOne,
  validOne,
  touchedOne,
}: {
  type: string;
  changeOne: (e: React.ChangeEvent<HTMLInputElement>) => void;
  blurOne: () => void;
  valueOne: string;
  errorOne: string;
  validOne: boolean;
  touchedOne: boolean;
}) {
  // 이메일 셀렉터 구현
  const select = ["직접 입력", "naver.com", "daum.net", "hanmail.net"];
  const [selectIdx, setSelectIdx] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  // 이메일 뒷값
  const [email2, setEmail2] = useState("");
  const [email2Touched, setEmail2Touched] = useState(false);
  const [email2Valid, setEmail2Valid] = useState(false);
  const [email2Error, setEmail2Error] = useState("");

  // mobX state 불러오기 및 함수 설정하기
  const { changeEmail2Valid, changeEmail2Touched, changeEmail2Value } =
    JoinStateStore;

  const email2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail2(e.target.value);
    setEmail2Valid(email2.trim() !== null && email2.includes("."));
    setEmail2Error((prev) => {
      return email2Valid ? "" : "올바르지 않은 이메일 형식입니다.";
    });
    changeEmail2Value(e.target.value);
    changeEmail2Valid(
      e.target.value.trim() !== null && e.target.value.includes(".")
    );
  };

  const email2Blur = () => {
    setEmail2Touched(true);
    changeEmail2Touched(true);
  };

  return (
    <div className="email-input flex-1 flex flex-wrap items-center">
      <input
        type={type}
        className="py-[0.995rem] outline-none border-b border-solid border-[rgba(0,0,0,.45)] flex-[17.6875_1_0]"
        placeholder="이메일 입력"
        onChange={changeOne}
        onBlur={blurOne}
        value={valueOne}
      />
      <span className="px-[0.475rem] font-bold">@</span>
      <input
        type={type}
        className="py-[0.995rem] outline-none border-b border-solid border-[rgba(0,0,0,.45)] flex-[17.6875_1_0] mmd:mr-[1.345rem] mr-0 read-only:opacity-55"
        placeholder="직접 입력"
        value={select[selectIdx] !== "직접 입력" ? select[selectIdx] : email2}
        onChange={email2Change}
        onBlur={email2Blur}
        readOnly={select[selectIdx] !== "직접 입력"}
      />
      <JoinEmailSelect
        select={select}
        selectIdx={selectIdx}
        setSelectIdx={setSelectIdx}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
      />
      {(errorOne && !validOne && touchedOne && (
        <JoinErrorMessage error={email2Error} />
      )) ||
        (!email2Valid && email2Error && email2Touched && (
          <JoinErrorMessage error={email2Error} />
        ))}
    </div>
  );
}

export default observer(JoinEmailInput);
