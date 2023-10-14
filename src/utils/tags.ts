import { getPosts, getThoughts, sortViaUpdated } from "./posts";
import { tagSlug } from "./slug";

export const getAllTags = async (locale?: string): Promise<string[]> => {
  const thoughts = await getThoughts(locale);
  const posts = await getPosts(locale);

  const postTags = posts.reduce((acc, post) => {
    return [...acc, ...(post.data.tags || [])];
  }, []);

  const thoughtTags = [];
  for (const thought of thoughts) {
    const { remarkPluginFrontmatter } = await thought.render();
    thoughtTags.push(...(remarkPluginFrontmatter.tags || []));
  }

  const allTags = [...new Set([...postTags, ...thoughtTags])].map((tag) =>
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

export const getThoughtsByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const thoughts = await getThoughts(locale);
  const thoughtsWhichHaveTag = [];
  for (const thought of thoughts) {
    const { remarkPluginFrontmatter } = await thought.render();
    if (haveTag(remarkPluginFrontmatter.tags || [], tag)) {
      thoughtsWhichHaveTag.push(thought);
    }
  }

  return thoughtsWhichHaveTag;
};

export const getAllByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const posts = await getPostsByTag(locale, tag);
  const thoughts = await getThoughtsByTag(locale, tag);

  const contents = posts.concat(thoughts);
  contents.sort((a, b) => sortViaUpdated(a, b, false));
  return contents;
};
