"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import { observer } from "mobx-react-lite";
import JoinStateStore from "@/app/store/JoinStateStore";

import JoinCaption from "@/app/components/private/join-form-div/JoinCaption";
import JoinSubmit from "@/app/components/private/join-form-div/JoinSubmit";
import JoinTableWrap from "@/app/components/private/join-form-div/JoinTableWrap";
import JoinTitle from "@/app/components/private/join-form-div/JoinTitle";
import RedirectComp from "@/app/components/shared/redirect/RedirectComp";

function JoinPage() {
  const { email1Value, email2Value, passwordValue, passCheckValue, nameValue } =
    JoinStateStore;

  const router = useRouter();

  const submitButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://front-mission.bigs.or.kr/auth/signup",
        {
          username: email1Value + "@" + email2Value,
          name: nameValue,
          password: passwordValue,
          confirmPassword: passCheckValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("회원가입을 축하합니다!");
        router.push("/");
      }
    } catch (e: any) {
      alert("이미 사용중인 사용자입니다.");
    }
  };

  return (
    <form id="frmJoin" className="mt-[3.57rem]" onSubmit={submitButton}>
      <RedirectComp />
      <JoinCaption />
      <JoinTitle />
      <JoinTableWrap />
      <JoinSubmit />
    </form>
  );
}

export default observer(JoinPage);
