"use client";

import FAQWrapper from "./components/private/FAQ/FAQWrapper";
import MainSlider from "./components/private/main-slider/MainSlider";
import SharedPageInner from "./components/shared/page-inner/SharedPageInner";
import useLoaded from "./hooks/useLoaded";

export default function Home() {
  useLoaded();

  return (
    <>
      <SharedPageInner>
        <div className="flex xl:flex-row flex-col xl:justify-between justify-start xl:items-start items-center xl:gap-0 gap-4">
          <MainSlider />
          <FAQWrapper />
        </div>
      </SharedPageInner>
    </>
  );
}
