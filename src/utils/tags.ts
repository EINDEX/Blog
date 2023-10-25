import { getPosts, sortViaUpdated } from "./posts";
import { tagSlug } from "./slug";

export const getAllTags = async (locale?: string): Promise<string[]> => {
  const posts = await getPosts(locale);

  const postTags = posts.reduce((acc, post) => {
    return [...acc, ...(post.data.tags || [])];
  }, []);

  const allTags = [...new Set([...postTags])].map((tag) =>
    tag.trim().replace("^#", "")
  );
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


export const getAllByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const posts = await getPostsByTag(locale, tag);

  const contents = posts;
  contents.sort((a, b) => sortViaUpdated(a, b, false));
  return contents;
};
