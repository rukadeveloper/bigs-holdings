import React from "react";
import SearchInput from "./SearchInput";

export default function SearchForm() {
  return (
    <form>
      <fieldset>
        <legend className="font-bold text-2xl">
          찾으시는 정보를 <br />
          입력해주세요.
        </legend>
        <SearchInput />
      </fieldset>
    </form>
  );
}
