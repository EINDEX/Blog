import { CollectionEntry, getCollection } from "astro:content";
import { timeFormat } from "./time";

export function postSortViaUpdated(
  a: CollectionEntry<"posts-cn" | "posts-en">,
  b: CollectionEntry<"posts-cn" | "posts-en">,
  asc: boolean = false
) {
  return (
    (asc ? 1 : -1) *
    ((a.data.updated || a.data.date) - (b.data.updated || b.data.date))
  );
}

export async function getPosts(locale: string) {
  const posts = await (
    await getCollection("posts-" + locale)
  ).filter((post) => {
    return post.data.draft !== true || import.meta.env.MODE === "development";
  });
  return posts.sort((a, b) => postSortViaUpdated(a, b, false));
}
