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
  const links = []
  const images = []
  const looping = (node) => {
    // console.log(node)
    if (node.type === "link" ) {
      links.push({url: node.url, title: toString(node.children)})
    }
    if (node.type === "image") {
      images.push({alt: node.alt, url: node.url})
    }
    if (node.children) {
      node.children.forEach(item => looping(item));
    }
  }
  return function (tree, { data, value }) {
    looping(tree)
    // console.log(links)
    console.log(images)
  };
}
