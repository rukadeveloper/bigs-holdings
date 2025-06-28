"use client";

import React, { FormEvent, useEffect, useState } from "react";

import WriteInputsWrapper from "@/app/components/private/write-form-input/WriteInputsWrapper";
import WriteInputWrapper from "@/app/components/private/write-form-input/WriteInputWrapper";

import { observer } from "mobx-react-lite";

import axios from "axios";

import AccountStateStore from "@/app/store/AccountStateStore";
import WriteStateStore from "@/app/store/WriteStateStore";

import WriteInputFullWrapper from "@/app/components/private/write-form-input/WriteInputFullWrapper";
import WriteButton from "@/app/components/private/write-form-input/WriteButton";
import WriteFileWrapper from "@/app/components/private/write-form-input/WriteFileWrapper";
import WriteFormSelectWrapper from "@/app/components/private/write-form-selector/WriteFormSelectWrapper";

function WritePage() {
  const { userEmail, accessToken, password } = AccountStateStore;
  const {
    title,
    content,
    categories,
    files,
    setCategory,
    setTitle,
    setContent,
    setFiling,
  } = WriteStateStore;

  const category = ["ETC", "NOTICE", "FREE", "QNA"];
  const [categoryIdx, setCategoryIdx] = useState(0);

  useEffect(() => {
    setCategory(category[categoryIdx]);
  }, [categoryIdx]);

  const titleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };

  const contentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            title: title,
            content: content,
            category: categories,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    try {
      const res = await axios.post(
        "https://front-mission.bigs.or.kr/boards",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(res);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <WriteInputsWrapper>
        <WriteInputWrapper
          type="text"
          label="아이디"
          htmlFor="id-for"
          isHalf={true}
          value={userEmail}
        />
        <WriteInputWrapper
          type="password"
          label="비밀번호(변경 안됨)"
          htmlFor="pw-for"
          isHalf={true}
          value={password}
        />
        <WriteFormSelectWrapper
          category={category}
          categoryIdx={categoryIdx}
          setCategoryIdx={setCategoryIdx}
        />
        <WriteInputFullWrapper
          type="text"
          label="글 제목"
          change={titleChange}
          value={title}
        />
        <WriteInputFullWrapper
          type="textarea"
          label="글 내용"
          change={contentChange}
          value={content}
        />
        <WriteFileWrapper setFiling={setFiling} files={files} />
      </WriteInputsWrapper>
      <WriteButton />
    </form>
  );
}

export default observer(WritePage);
