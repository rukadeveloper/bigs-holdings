"use client";

import React from "react";

import JoinStateStore from "@/app/store/JoinStateStore";
import { observer } from "mobx-react-lite";

function JoinSubmit() {
  const {
    isEmail1Valid,
    isEmail1Touched,
    isEmail2Valid,
    isEmail2Touched,
    isPasswordValid,
    isPasswordTouched,
    isPassCheckValid,
    isPassCheckTouched,
    isNameValid,
    isNameTouched,
  } = JoinStateStore;

  return (
    <div className="submit-wrapper mt-[3.23rem] mb-[4.23rem] w-full">
      <button
        className="w-[200px] block mx-auto my-0 rounded-[45px] bg-[#000] text-white font-bold p-[1.3rem] pt-[1.5rem] text-[1.2rem] disabled:opacity-20"
        type="submit"
        disabled={
          !isEmail1Valid ||
          !isEmail1Touched ||
          !isEmail2Valid ||
          !isEmail2Touched ||
          !isPasswordValid ||
          !isPasswordTouched ||
          !isPassCheckValid ||
          !isPassCheckTouched ||
          !isNameValid ||
          !isNameTouched
        }
      >
        가입 완료하기
      </button>
    </div>
  );
}

export default observer(JoinSubmit);
