export type Locale = "kr" | "en";
export const locales: Locale[] = ["kr", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteConfig = {
  name: "2027 WYD 인천교구대회 공식 사이트",
  url: "https://www.wyd2027did-incheon.org",
  ogImage: "https://r2-image-server.masterforce999.workers.dev/opengraph-image.png",
};

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title: "2027 WYD 인천교구대회 공식 사이트",
      description: "인천교구에서 열리는 교구대회(DID) 프로그램 안내, 참가 신청, 홈스테이 및 봉사자 정보를 확인하세요. 전 세계 청년들과 함께하는 신앙의 축제가 시작됩니다.",
      keywords:
        "2027 WYD 인천교구대회, 인천교구, WYD, DID, 교구대회, 일정, 공지사항, 관련 자료, 참가 신청, 홈스테이, 봉사자, 봉헌하기",
      ogLocale: "ko_KR",
    },
    header: {
      logoAlt: "wyd did 인천",
      nav: {
        home: "홈",
        calendar: "캘린더",
        youtube: "영상",
        notice: "공지",
        site: "사이트",
        sponsor: "후원",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did 인천",
      address:
        "인천광역시 동구 박문로 1 인천교구청 102호 WYD 인천 교구대회 사무국",
      email: "qna.wyd.doc.icn@gmail.com",
      phone: "032-765-6997",
      hours: "운영시간: 10:00 ~ 18:00",
      copyright: "Copyright ⓒ 인천교구 All rights reserved",
    },
    slider: {
      pause: "일시정지 버튼",
      play: "재생 버튼",
      prev: "이전 슬라이드 버튼",
      next: "다음 슬라이드 버튼",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "공지사항",
      youtube: "추천 영상",
      site: "관련 사이트",
      faq: "FAQ",
    },
    sponsor: {
      eyebrow: "WYD 인천 교구대회",
      title: "후원문의",
      description:
        "WYD 인천 교구대회를 함께 준비해 주실 분들의 문의를 기다립니다.",
      addressLabel: "주소",
      phoneLabel: "전화",
      address:
        "인천광역시 동구 박문로 1 인천교구청 102호 WYD 인천 교구대회 사무국",
      phone: "032-765-6997",
    },
    notice: {
      backLink: "돌아가기",
    },
    common: {
      prev: "이전",
      next: "다음",
      prevPage: "이전 페이지",
      nextPage: "다음 페이지",
      backToTop: "맨 위로 이동",
      close: "닫기",
      hideFor7Days: "7일간 보지 않기",
    },
    popup: {
      title: "2026 세계청년대회 안내",
      description:
        "인천교구에서 준비하는 세계청년대회 소식을 확인해보세요.",
    },
  },
  en: {
    lang: "en",
    metadata: {
      title: "2027 WYD Incheon DID Official Site",
      description: "2027 WYD Incheon DID schedules, notices, and info.",
      keywords:
        "2027 WYD Incheon DID, Incheon Diocese, WYD, DID, Diocesan Day, schedule, notices, resources, application, homestay, volunteer, offering",
      ogLocale: "en_US",
    },
    header: {
      logoAlt: "wyd did Incheon",
      nav: {
        home: "Home",
        calendar: "Calendar",
        youtube: "Videos",
        notice: "Notice",
        site: "Sites",
        sponsor: "Sponsor",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did Incheon",
      address:
        "1, Bakmun-ro, Dong-gu, Incheon, Diocesan Office #102, WYD Incheon Diocesan Committee",
      email: "qna.wyd.doc.icn@gmail.com",
      phone: "032-765-6997",
      hours: "Hours: 10:00 ~ 18:00",
      copyright: "Copyright ⓒ Diocese of Incheon All rights reserved",
    },
    slider: {
      pause: "Pause",
      play: "Play",
      prev: "Previous slide",
      next: "Next slide",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "Notice",
      youtube: "Featured Videos",
      site: "Related Sites",
      faq: "FAQ",
    },
    sponsor: {
      eyebrow: "WYD Incheon Diocesan Day",
      title: "Sponsorship Inquiry",
      description:
        "Contact the WYD Incheon Diocesan Committee for sponsorship inquiries.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      address:
        "1, Bakmun-ro, Dong-gu, Incheon, Diocesan Office #102, WYD Incheon Diocesan Committee",
      phone: "032-765-6997",
    },
    notice: {
      backLink: "Go back",
    },
    common: {
      prev: "Previous",
      next: "Next",
      prevPage: "Previous page",
      nextPage: "Next page",
      backToTop: "Back to top",
      close: "Close",
      hideFor7Days: "Hide for 7 days",
    },
    popup: {
      title: "WYD 2026 Information",
      description:
        "Check out the latest news about WYD from the Diocese of Incheon.",
    },
  },
} as const;

export type Content = (typeof content)["kr"];
