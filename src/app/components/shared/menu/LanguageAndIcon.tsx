import React from "react";

import Language from "./Language";
import Search from "./Search";
import SearchPrompt from "./SearchPrompt";
import AccountButton from "./AccountButton";

export default function LanguageAndIcon() {
  return (
    <div className="language__and__icon ml-[5rem] xl:flex hidden items-center">
      <Language />
      <AccountButton />
      <Search />
      <SearchPrompt />
    </div>
  );
}
