import type { CollectionEntry, CollectionKey } from "astro:content";

export function getLastPartOfSlug(slug: string): string {
  const slugInSplit = slug.split("/");
  return slugInSplit[slugInSplit.length - 1];
}

export function getLocaleFromSlug(slug: string): string {
  const slugInSplit = slug.split("/");
  return slugInSplit[0];
}

export function getLinkViaLocale(locale: string, slug: string): string {
  const slugWithOutLocale = slug.replace(`/${locale}/`, "/");
  return `/${locale}${slugWithOutLocale}`;
}

export const tagSlug = (tag: string) => {
  return tag.toLowerCase().replace(/ /g, "-").replace(/s$/g, "");
};

export function getRealSlugByItem(
  item: CollectionEntry<CollectionKey>
): string {
  const slug = getLastPartOfSlug(item.slug);
  const lang = getLocaleFromSlug(item.slug);
  if (item.collection === "pages") {
    return `/${lang}/${slug}`;
  }
  return `/${lang}/${item.collection}/${slug}`;
}
