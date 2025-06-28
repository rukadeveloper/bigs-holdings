"use client";

import React from "react";

import { observer } from "mobx-react-lite";

import SearchInner from "./SearchInner";
import SearchForm from "./SearchForm";
import HeaderStateStore from "@/app/store/HeaderStateStore";

function SearchPrompt() {
  const { isSearchOpen } = HeaderStateStore;

  return (
    <div
      className={`search-prompt w-full absolute top-full left-0 ${
        isSearchOpen ? "block" : "hidden"
      }`}
    >
      <SearchInner>
        <SearchForm />
      </SearchInner>
    </div>
  );
}

export default observer(SearchPrompt);
