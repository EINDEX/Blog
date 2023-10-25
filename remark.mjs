import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = Math.ceil(readingTime.minutes);
    data.astro.frontmatter.words = readingTime.words;
  };
}

export function remarkRawString() {
  return function (tree, { data }) {
    data.astro.frontmatter.rawString = toString(tree);
  };
}
