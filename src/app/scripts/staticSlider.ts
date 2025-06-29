type Slider = {
  id: number;
  sliderName: string;
  sliderSpan: string;
  sliderImage: string;
  isWhite: boolean;
};

export const staticSlider: Slider[] = [
  {
    id: 1000,
    sliderName: "우리 WON 모바일 가입하면",
    sliderSpan: "최대 11만원 혜택에|매월 5천원 상당 쿠폰까지",
    sliderImage: "/slider/slider01.png",
    isWhite: true,
  },
  {
    id: 1001,
    sliderName: "우리 WON 모바일 리뷰 이벤트",
    sliderSpan: "개통 후기 작성하면|3만원 증정!",
    sliderImage: "/slider/slider02.png",
    isWhite: true,
  },
  {
    id: 1002,
    sliderName: "우리 WON 모바일",
    sliderSpan: "32GB 데이터 완전 무제한|최대 14,700원",
    sliderImage: "/slider/slider03.png",
    isWhite: false,
  },
];
