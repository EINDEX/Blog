import { getCollection, getEntries } from "astro:content";
import { getAllProjects, getPosts, getThoughts } from "./posts";
import { tagSlug } from "./slug";

export const getAllTags = async (locale?: string): Promise<string[]> => {
  const thoughts = await getThoughts(locale);
  const posts = await getPosts(locale);

  const postTags = posts.reduce((acc, post) => {
    return [...acc, ...(post.data.tags || [])];
  }, []);
  const thoughtTags = thoughts.reduce((acc, thought) => {
    return [...acc, ...(thought.data.tags || [])];
  }, []);

  const allTags = [...new Set([...postTags, ...thoughtTags])];
  return allTags;
};

const haveTag = (tags, matchTag) => {
  const matchTagSlug = tagSlug(matchTag);
  return tags.reduce((acc, tag) => {
    return acc || tagSlug(tag) === matchTagSlug;
  }, false);
};

export const getPostsByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const posts = await getPosts(locale);
  return posts.filter((post) => {
    return haveTag(post.data.tags || [], tag);
  });
};

export const getThoughtsByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const thoughts = await getThoughts(locale);
  return thoughts.filter((thought) => {
    return haveTag(thought.data.tags || [], tag);
  });
};

export const getAllByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const posts = await getPostsByTag(locale, tag);
  const thoughts = await getThoughtsByTag(locale, tag);
  return {
    posts,
    thoughts,
  };
};

export const getAllTag = async (lang: string) => {
  const tagsInContent = getAllTags(lang);
  console.log(tagsInContent)
  const collection = await getCollection("i18n", (item) => {
    return item.id.startsWith("tag");
  })
  return collection;
}
