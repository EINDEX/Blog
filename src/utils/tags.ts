import { getAllProjects, getPosts, getThoughts } from "./posts";
import { tagSlug } from "./slug";

export const getAllTags = async (locale: string): Promise<string[]> => {
  const thoughts = await getThoughts(locale);
  const posts = await getPosts(locale);
  const projects = await getAllProjects(locale);

  const postTags = posts.reduce((acc, post) => {
    return [...acc, ...(post.data.tags || [])];
  }, []);
  const thoughtTags = thoughts.reduce((acc, thought) => {
    return [...acc, ...(thought.data.tags || [])];
  }, []);

  const projectTags = projects.reduce((acc, project) => {
    return [...acc, ...(project.labels || [])];
  }, []);

  const allTags = [...new Set([...postTags, ...thoughtTags, ...projectTags])];
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
    return haveTag(post.data.tags, tag);
  });
};

export const getThoughtsByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const thoughts = await getThoughts(locale);
  return thoughts.filter((thought) => {
    return haveTag(thought.data.tags, tag);
  });
};

export const getProjectsByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const projects = await getAllProjects(locale);
  return projects.filter((project) => {
    return haveTag(project.labels, tag);
  });
};

export const getAllByTag = async (
  locale: string,
  tag: string
): Promise<any> => {
  const posts = await getPostsByTag(locale, tag);
  const thoughts = await getThoughtsByTag(locale, tag);
  const projects = await getProjectsByTag(locale, tag);
  return {
    posts,
    thoughts,
    projects,
  };
};
