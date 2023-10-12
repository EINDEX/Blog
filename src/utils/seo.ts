import { TITLE_LENGTH, SITE_NAME } from "./constants";

function isMainPage(pageUrl: string): boolean {
  return ["/en", "/zh"].includes(pageUrl);
}

export function titleForSeo(title: string, pageUrl: string): string {
  if (isMainPage(pageUrl)) {
    return SITE_NAME;
  }
  if (title === SITE_NAME || !title || title.trim().length === 0) {
    return title;
  }
  if (title.length > TITLE_LENGTH - (SITE_NAME.length + 6)) {
    return `${title.substring(
      0,
      TITLE_LENGTH - SITE_NAME.length - 6
    )}... | ${SITE_NAME}`;
  }
  return `${title} | ${SITE_NAME}`;
}

export function cutString(string: string, length: number) {
  if (!string) {
    return string
  }
  if (string.length > length) {
    return `${string.substring(0, length - 3)}...`;
  }
  return string;
}
