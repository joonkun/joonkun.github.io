/**
 * The site's categories. Every post belongs to exactly one of these, so keep the
 * list short — six is the practical ceiling before the sidebar stops reading as
 * a menu. Rename or replace entries here, then update the `category` value in
 * each post's frontmatter to match; the build fails on any mismatch.
 *
 * Order matters: it is the order used on the categories index and in the home
 * sidebar.
 */
export const categories = ["제품", "AI", "노트"] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");

/** One line per category, shown on its archive page and in listings. */
export const categoryDescriptions: Record<Category, string> = {
  제품: "고객의 문제를 제품의 방향으로 바꾸는 일에 대한 글.",
  AI: "AI로 제품을 만들고 일하는 방식에 대한 글.",
  노트: "이번 주에 만들고, 결정하고, 배운 것에 대한 짧은 기록.",
};
