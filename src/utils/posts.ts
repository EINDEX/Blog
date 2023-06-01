import { CollectionEntry, getCollection } from "astro:content";

export function sortViaUpdated(
  a:
    | CollectionEntry<"posts">
    | CollectionEntry<"thoughts">
    | CollectionEntry<"newsletters">,
  b:
    | CollectionEntry<"posts">
    | CollectionEntry<"thoughts">
    | CollectionEntry<"newsletters">,
  asc: boolean = false
) {
  return (
    (asc ? 1 : -1) *
    ((a.data.updated || a.data.date) - (b.data.updated || b.data.date))
  );
}

export async function getPosts(
  locale: string
): Promise<CollectionEntry<"posts">[]> {
  const posts = await (
    await getCollection("posts")
  )
    .filter((post) => post.slug.startsWith(locale))

  return posts.sort((a, b) => sortViaUpdated(a, b, false));
}

export async function getThoughts(
  locale: string
): Promise<CollectionEntry<"thoughts">[]> {
  const thoughts = await (
    await getCollection("thoughts")
  ).filter((thought) => thought.slug.startsWith(locale));
  return thoughts.sort((a, b) => sortViaUpdated(a, b, false));
}

export async function getNewsletters(
  locale: string
): Promise<CollectionEntry<"newsletters">[]> {
  const newsletters = await (
    await getCollection("newsletters")
  )
    .filter((post) => post.slug.startsWith(locale))
  if (newsletters.length == 0) {
    return []
  }
  return newsletters.sort((a, b) => sortViaUpdated(a, b, false));
}

type project = {
  name: string;
  logo: string;
  url: string;
  labels: string[];
  openSource: boolean;
};

export const getAllProjects = async (locale: string): Promise<project[]> => {
  return [
    {
      name: "Logseq Copilot",
      labels: ["Browser Extension", "Logseq", "Open Source"],
      url: "https://logseq-copilot.eindex.me",
      logo: "/images/logseq-copilot.png",
      openSource: true,
    },
    {
      name: "Logseq Memos Sync",
      labels: ["Logseq", "Logseq Plugin", "Memos", "Open Source"],
      url: "https://github.com/eindex/logseq-memos-sync",
      logo: "/images/logseq-memos-sync.webp",
      openSource: true,
    },
  ];
};

export const getSummary = (locale: string, content: string) => {
  if (content.length <= 100) {
    return content;
  }
  if (locale === "en") {
    const cutOff = content.slice(200, 250).indexOf(" ");
    return content.substring(0, cutOff + 200) + " ...";
  } else {
    return content.substring(0, 120) + " ...";
  }
};
