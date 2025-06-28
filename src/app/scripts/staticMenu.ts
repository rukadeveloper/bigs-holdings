export type StaticMenu = {
  firstMenu: string;
  firstName: string;
  firstDetails: string;
  firstImage: string;
  second: Second[];
};

export type Second = {
  secondLink: string;
  secondName: string;
};

export const staticMenu: StaticMenu[] = [
  {
    firstMenu: "/company/about",
    firstName: "기업 소개",
    firstDetails: "새 시작을 이어주는 창, 그 시작을 CJ가 함께 합니다.",
    firstImage:
      "https://www.lxglas.co.kr/assets/front/images/common/header_content_img_02.png",
    second: [
      {
        secondLink: "/company/about",
        secondName: "About CJ",
      },
      {
        secondLink: "/company/info",
        secondName: "회사 소개",
      },
      {
        secondLink: "/company/road",
        secondName: "오시는 길",
      },
      {
        secondLink: "/company/vision",
        secondName: "VISION",
      },
      {
        secondLink: "/company/business",
        secondName: "정도경영",
      },
    ],
  },
  {
    firstMenu: "/products/cottingGlass",
    firstName: "제품 소개",
    firstDetails: "다양한 유리 솔루션을 개발합니다.",
    firstImage:
      "https://www.lxglas.co.kr/assets/front/images/common/header_content_img_03.png",
    second: [
      {
        secondLink: "/products/cottingGlass",
        secondName: "코팅 유리",
      },
      {
        secondLink: "/products/circularGlass",
        secondName: "원판 유리",
      },
      {
        secondLink: "/product/processedGlass",
        secondName: "가공 유리",
      },
    ],
  },
  {
    firstMenu: "/community/customer",
    firstName: "커뮤니티",
    firstDetails: "고객 지원 및 커뮤니티를 제공하는 공간입니다.",
    firstImage:
      "https://www.lxglas.co.kr/assets/front/images/common/header_content_img_05.png",
    second: [
      {
        secondLink: "/community/customer",
        secondName: "고객 지원",
      },
    ],
  },
];
