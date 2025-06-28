"use client";

import React, { useReducer } from "react";
import { observer } from "mobx-react-lite";
import JoinInputWrapper from "../join-form-input/JoinInputWrapper";
import JoinStateStore from "@/app/store/JoinStateStore";

type FormState = {
  email: InnerType;
  password: InnerType;
  passwordCheck: InnerType;
  name: InnerType;
};

type InnerType = {
  value: string;
  valid: boolean;
  errorMessage: string;
  touched: boolean;
};

type Reducer = {
  type:
    | "CHANGE_EMAIL"
    | "EMAIL_TOUCHED"
    | "CHANGE_PASSWORD"
    | "PASSWORD_TOUCHED"
    | "CHANGE_PASSWORD_CHECK"
    | "PASSWORD_CHECK_TOUCHED"
    | "CHANGE_NAME"
    | "NAME_TOUCHED";
  val: string;
};

function JoinTableWrap() {
  const emailValid = (val: string): boolean => {
    return val.trim() !== "";
  };
  const passwordValid = (val: string): boolean => {
    return (
      val.trim().length > 0 &&
      val.length >= 8 &&
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!%*#?&]).*$/.test(val)
    );
  };
  const passwordCheckValid = (val: string, password: string): boolean => {
    return val.trim() !== "" && val === password;
  };

  const nameValid = (val: string) => {
    return val.trim() !== "" && /^[가-힣]+$/.test(val);
  };

  const initState: FormState = {
    email: {
      value: "",
      valid: false,
      errorMessage: "",
      touched: false,
    },
    password: {
      value: "",
      valid: false,
      errorMessage: "",
      touched: false,
    },
    passwordCheck: {
      value: "",
      valid: false,
      errorMessage: "",
      touched: false,
    },
    name: {
      value: "",
      valid: false,
      errorMessage: "",
      touched: false,
    },
  };

  const reducer = (state: FormState, action: Reducer) => {
    switch (action.type) {
      case "CHANGE_EMAIL":
        return {
          ...state,
          email: {
            ...state.email,
            value: action.val,
            valid: emailValid(action.val),
            errorMessage: !emailValid(action.val)
              ? "반드시 입력해야 합니다!"
              : "",
          },
        };
      case "EMAIL_TOUCHED":
        return {
          ...state,
          email: {
            ...state.email,
            touched: true,
          },
        };
      case "CHANGE_PASSWORD":
        return {
          ...state,
          password: {
            ...state.password,
            value: action.val,
            valid: passwordValid(action.val),
            errorMessage: !passwordValid(action.val)
              ? "8자 이상 그리고 숫자, 영문자, 특수문자 포함되어야 합니다."
              : "",
          },
        };

      case "PASSWORD_TOUCHED":
        return {
          ...state,
          password: {
            ...state.password,
            touched: true,
          },
        };
      case "CHANGE_PASSWORD_CHECK":
        return {
          ...state,
          passwordCheck: {
            ...state.passwordCheck,
            value: action.val,
            valid: passwordCheckValid(action.val, state.password.value),
            errorMessage: !passwordCheckValid(action.val, state.password.value)
              ? "서로 일치하지 않습니다."
              : "",
          },
        };
      case "PASSWORD_CHECK_TOUCHED":
        return {
          ...state,
          passwordCheck: {
            ...state.passwordCheck,
            touched: true,
          },
        };
      case "CHANGE_NAME":
        return {
          ...state,
          name: {
            ...state.name,
            value: action.val,
            valid: nameValid(action.val),
            errorMessage: !nameValid(action.val)
              ? "비어있거나, 한글로 작성된 이름이 아닙니다."
              : "",
          },
        };
      case "NAME_TOUCHED":
        return {
          ...state,
          name: {
            ...state.name,
            touched: true,
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const {
    changeEmail1Valid,
    changeEmail1Touched,
    changeEmail1Value,
    changePasswordValid,
    changePasswordTouched,
    changePasswordValue,
    changePassCheckValid,
    changePassCheckTouched,
    changePassCheckValue,
    changeNameValid,
    changeNameTouched,
    changeNameValue,
  } = JoinStateStore;

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "CHANGE_EMAIL", val: e.target.value });
    changeEmail1Value(e.target.value);
    changeEmail1Valid(emailValid(e.target.value));
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "CHANGE_PASSWORD", val: e.target.value });
    changePasswordValue(e.target.value);
    changePasswordValid(passwordValid(e.target.value));
  };

  const passwordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch({ type: "CHANGE_PASSWORD_CHECK", val: e.target.value });
    changePassCheckValue(e.target.value);
    changePassCheckValid(
      passwordCheckValid(e.target.value, state.password.value)
    );
  };

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "CHANGE_NAME", val: e.target.value });
    changeNameValue(e.target.value);
    changeNameValid(nameValid(e.target.value));
  };

  const emailBlur = (): void => {
    dispatch({ type: "EMAIL_TOUCHED", val: "" });
    changeEmail1Touched(true);
  };

  const passwordBlur = (): void => {
    dispatch({ type: "PASSWORD_TOUCHED", val: "" });
    changePasswordTouched(true);
  };

  const passwordCheckBlur = (): void => {
    dispatch({ type: "PASSWORD_CHECK_TOUCHED", val: "" });
    changePassCheckTouched(true);
  };

  const nameBlur = (): void => {
    dispatch({ type: "NAME_TOUCHED", val: "" });
    changeNameTouched(true);
  };

  return (
    <div className="join-table-wrap px-[2.33rem] py-[4.86rem] border-b border-solid border-[rgba(0,0,0,.35)">
      <JoinInputWrapper
        type={"text"}
        isMust={true}
        label={"아이디"}
        placeholder={"아이디를 입력해주세요."}
        change={emailChange}
        blur={emailBlur}
        value={state.email.value}
        valid={state.email.valid}
        error={state.email.errorMessage}
        touched={state.email.touched}
      />
      <JoinInputWrapper
        type={"password"}
        isMust={true}
        label={"비밀번호"}
        placeholder={"비밀번호를 입력해주세요."}
        change={passwordChange}
        blur={passwordBlur}
        value={state.password.value}
        valid={state.password.valid}
        error={state.password.errorMessage}
        touched={state.password.touched}
      />
      <JoinInputWrapper
        type={"password"}
        isMust={true}
        label={"비밀번호 확인"}
        placeholder={"비밀번호를 한번 더 입력해주세요."}
        change={passwordCheckChange}
        blur={passwordCheckBlur}
        value={state.passwordCheck.value}
        valid={state.passwordCheck.valid}
        error={state.passwordCheck.errorMessage}
        touched={state.passwordCheck.touched}
      />
      <JoinInputWrapper
        type={"text"}
        isMust={true}
        label={"사용자 이름"}
        placeholder={"사용자 이름을 입력해주세요."}
        change={nameChange}
        blur={nameBlur}
        value={state.name.value}
        valid={state.name.valid}
        error={state.name.errorMessage}
        touched={state.name.touched}
      />
    </div>
  );
}

export default observer(JoinTableWrap);
