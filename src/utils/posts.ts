import { CollectionEntry, getCollection } from "astro:content";

export function sortViaUpdated(
  a: CollectionEntry<"posts-cn" | "posts-en">,
  b: CollectionEntry<"posts-cn" | "posts-en">,
  asc: boolean = false
) {
  return (
    (asc ? 1 : -1) *
    ((a.data.updated || a.data.date) - (b.data.updated || b.data.date))
  );
}

type Post = CollectionEntry<"posts-cn" | "posts-en">[];

export async function getPosts(locale: string): Promise<Post> {
  const posts = await (
    await getCollection("posts-" + locale)
  ).filter((post) => {
    return post.data.draft !== true || import.meta.env.MODE === "development";
  });
  return posts.sort((a, b) => sortViaUpdated(a, b, false));
}


export async function getThoughts(locale: string): Promise<Post> {
  const thoughts = await (
    await getCollection("thoughts-" + locale)
  ).filter((thought) => {
    return thought.data.draft !== true || import.meta.env.MODE === "development";
  });
  return thoughts.sort((a, b) => sortViaUpdated(a, b, false));
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
}