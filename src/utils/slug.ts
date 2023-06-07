export function getLastPartOfSlug(slug: string): string {
  const slugInSplit = slug.split("/");
  return slugInSplit[slugInSplit.length - 1];
}

export function getLinkViaLocale(locale: string, slug: string): string {
  const slugWithOutLocale = slug.replace(`/${locale}/`, "/");
  if (locale === "en") {
    return `${slugWithOutLocale}`;
  } else {
    return `/${locale}${slugWithOutLocale}`;
  }
}

export const tagSlug = (tag: string) => {
  return tag.toLowerCase().replace(/ /g, "-");
};
