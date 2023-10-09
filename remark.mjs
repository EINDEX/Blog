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

export function remarkReadmore() {
  return function (tree, { data, value }) {
    if (data.astro.frontmatter.words < 100) {
      return;
    }
    data.astro.frontmatter.cut = value
      .trim()
      .split(/\n+/)
      .slice(0, 2)
      .join("\n\n");
  };
}


export function remarkMentions() {
  return function (tree, { data, value }) {

  };
}
