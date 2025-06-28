"use client";

import React, { FormEvent, useEffect, useState } from "react";

import axios from "axios";

import { observer } from "mobx-react-lite";

import LoginStateStore from "@/app/store/LoginStateStore";

import LoginInputWrapper from "@/app/components/private/login-form-input/LoginInputWrapper";
import CheckAndFind from "@/app/components/private/login-form-input/CheckAndFind";
import LoginButton from "@/app/components/private/login-form-input/LoginButton";
import JoinAdvice from "@/app/components/private/login-form-input/JoinAdvice";
import AccountStateStore from "@/app/store/AccountStateStore";
import useLoaded from "@/app/hooks/useLoaded";
import RedirectComp from "@/app/components/shared/redirect/RedirectComp";

function LoginPage() {
  const {
    idValue,
    idValid,
    idError,
    idTouched,
    passValue,
    passValid,
    passError,
    passTouched,
    alertOpen,
    changeIdValue,
    changeIdValid,
    changeIdError,
    changeIdTouched,
    changePassValue,
    changePassValid,
    changePassError,
    changePassTouched,
    changeSuccessMessage,
    changeAlertOpen,
    changeMessageLoading,
    changeFailedMessage,
  } = LoginStateStore;

  const {
    changeIsAuth,
    changeAccessToken,
    changeRefreshToken,
    changeUserEmail,
  } = AccountStateStore;

  const idChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeIdValue(e.target.value);
    changeIdValid(
      e.target.value.trim().length !== 0 && e.target.value.includes("@")
    );
    changeIdError(
      !(e.target.value.trim().length !== 0 && e.target.value.includes("@"))
        ? "아이디 형식은 이메일 형식이어야 합니다."
        : ""
    );
  };

  const passChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassValue(e.target.value);
    changePassValid(
      e.target.value.trim().length !== 0 &&
        e.target.value.length >= 8 &&
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!%*#?&]).*$/.test(e.target.value)
    );
    changePassError(
      !(
        e.target.value.trim().length !== 0 &&
        e.target.value.length >= 8 &&
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!%*#?&]).*$/.test(e.target.value)
      )
        ? "형식에 맞지 않는 비밀번호입니다"
        : ""
    );
  };

  useEffect(() => {
    return () => {
      changeIdValue("");
      changeIdTouched(false);
      changePassValue("");
      changePassTouched(false);
    };
  }, []);

  const idBlur = () => {
    changeIdTouched(true);
  };

  const passBlur = () => {
    changePassTouched(true);
  };

  const submitButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      changeMessageLoading(true);
      const response = await axios.post(
        "https://front-mission.bigs.or.kr/auth/signin",
        {
          username: idValue,
          password: passValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        changeSuccessMessage("로그인에 성공했습니다!");
        changeAlertOpen(true);

        changeIsAuth(true);
        changeAccessToken(response.data.accessToken);
        changeRefreshToken(response.data.refreshToken);
        changeUserEmail(idValue);

        sessionStorage.setItem(
          "my-account",
          JSON.stringify({
            isAuth: true,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            userEmail: idValue,
          })
        );
      }
    } catch (e: any) {
      changeFailedMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
    } finally {
      changeMessageLoading(false);
    }
  };

  return (
    <form onSubmit={submitButton}>
      <RedirectComp />
      <LoginInputWrapper
        type={"text"}
        placeholder="아이디"
        label="아이디"
        change={idChange}
        blur={idBlur}
        value={idValue}
        valid={idValid}
        error={idError}
        touched={idTouched}
      />
      <LoginInputWrapper
        type={"password"}
        placeholder="비밀번호"
        label="비밀번호"
        change={passChange}
        blur={passBlur}
        value={passValue}
        valid={passValid}
        error={passError}
        touched={passTouched}
      />
      <CheckAndFind />
      <LoginButton />
      <JoinAdvice />
    </form>
  );
}

export default observer(LoginPage);
