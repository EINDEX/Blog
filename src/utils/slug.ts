export function getLastPartOfSlug(slug: string): string {
  const slugInSplit = slug.split("/");
  return slugInSplit[slugInSplit.length - 1];
}

export function getLinkViaLocale(locale: string, slug: string): string {
  if (locale === "en") {
    return slug;
  } else {
    return `/${locale}${slug}`;
  }
}


export const tagSlug = (tag: string) => {
  return tag.toLowerCase().replace(/ /g, "-");
}