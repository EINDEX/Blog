import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export function sortViaUpdated(
  a: CollectionEntry<"posts"> | CollectionEntry<"thoughts">,
  b: CollectionEntry<"posts"> | CollectionEntry<"thoughts">,
  asc: boolean = false
) {
  return (asc ? 1 : -1) * (a.data.date.getTime() - b.data.date.getTime());
}

export async function getPosts(
  locale?: string
): Promise<CollectionEntry<"posts">[]> {
  const posts = await getCollection("posts", ({ data, id }) => {
    let flag = true;
    if (locale) {
      flag = id.startsWith(locale);
    }
    return (
      flag && (data.draft !== true || import.meta.env.MODE === "development")
    );
  });
  return posts.sort((a, b) => sortViaUpdated(a, b, false));
}

export async function getThoughts(
  locale?: string
): Promise<CollectionEntry<"thoughts">[]> {
  const thoughts = await getCollection("thoughts", ({ data, id }) => {
    let flag = true;
    if (locale) {
      flag = id.startsWith(locale);
    }
    return (
      flag && (data.draft !== true || import.meta.env.MODE === "development")
    );
  });

  thoughts.sort((a, b) => sortViaUpdated(a, b, false))
  return thoughts;
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
