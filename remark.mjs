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

import { findAndReplace } from "mdast-util-find-and-replace";
import slugify from "slugify";
const userGroup = "[\\da-z][-\\da-z_]{0,38}";
const mentionRegex = new RegExp("(?:^|\\s)\\#(" + userGroup + ")", "gi");

export const remarkTagFounder = (
  opts = { usernameLink: (/** @type {string} */ username) => `/${username}` }
) => {
  let tags = [];
  let lang = "";

  const replaceMention = (value, username) => {
    tags.push(slugify(username, { lower: true }));

    let whitespace = [];

    // Separate leading white space
    if (value.indexOf("#") > 0) {
      whitespace.push({
        type: "text",
        value: value.substring(0, value.indexOf("#")),
      });
    }

    return [
      ...whitespace,
      {
        type: "link",
        url: `/${lang}/tags/${slugify(username, { lower: true })}`,
        children: [
          { type: "text", value: value.trim() }, // Trim the username here
        ],
      },
    ];
  };

  return (tree, _file) => {
    lang = _file.history[0].includes("/en/") ? "en" : "zh";
    tags = [];

    findAndReplace(tree, [[mentionRegex, replaceMention]]);

    _file.data.astro.frontmatter.tags = tags;
  };
};

export const remarkContentProcesser = () => {
  const links = [];
  const images = [];
  const looping = (node) => {
    // console.log(node)
    if (node.type === "link") {
      links.push({ url: node.url, title: toString(node.children) });
    }
    if (node.type === "image") {
      images.push({ alt: node.alt, url: node.url });
    }
    if (node.children) {
      node.children.forEach((item) => looping(item));
    }
  };
  return (tree, { data, value }) => {
    looping(tree);
    data.astro.frontmatter.links = links;
    data.astro.frontmatter.images = links;
  };
};
