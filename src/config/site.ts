export const siteConfig = {
  /** 공개 전에는 false로 둔다. false이면 모든 페이지가 검색엔진에 잡히지 않는다. */
  launched: false,
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Joon",
  tagline: "고객 현장의 문제를 제품으로 푸는 AI PM",
  title: "Joon (허재준) - AI Product Manager",
  description:
    "고객 현장의 문제를 제품으로 푸는 AI PM, Joon(허재준)의 글",
  siteUrl: "https://joonkun.github.io",
  authorName: "Joon",
  email: "jaejun0225re@gmail.com",
  language: "ko",
  dateLocale: "ko-KR",
  locale: "ko_KR",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "고객 현장에서 반복되는 문제를 찾아 제품으로 풀어 온 AI PM입니다. 만들고, 결정하고, 배운 것을 씁니다.",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: true,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "새 글 받아보기",
    description: "새 글이 올라오면 메일 한 통을 보냅니다.",
  },
  contact: {
    enabled: true,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Writing", href: "/posts/" },
  { label: "Notes", href: "/category/노트/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "RSS", href: "/rss.xml" },
];
