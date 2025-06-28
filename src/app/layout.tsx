import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "./components/shared/header/MainHeader";
import { LoadingProvider } from "./context/LoadingContext";
import RootWrapper from "./components/shared/root-wrapper/RootWrapper";

export const metadata: Metadata = {
  title: "홀딩스 테스트 전형 과제",
  description: "홀딩스 테스트 전형 과제입니다.",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable} suppressHydrationWarning>
      <body
        className={`antialiased ${pretendard.className}`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          <RootWrapper>
            <MainHeader />
            <main>{children}</main>
          </RootWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
