import fs from "fs-extra";
import parser from "xml2json";
import Webmention from "@remy/webmention";

const localSite = "data/webmentions/sitemap_cache.json";
const feeds = [
  "dist/feed.xml",
  "dist/zh/feed.xml",
  "dist/thoughts/feed.xml",
  "dist/zh/thoughts/feed.xml",
];

const wm = new Webmention({ limit: 20, send: true });

const loadFeeds = async () => {
  const data = [];
  for (const feed of feeds) {
    const rss = JSON.parse(parser.toJson(fs.readFileSync(feed)));
    rss.rss.channel.item.forEach((item) => {
      data.push({
        loc: item.link,
        pubDate: item.pubDate,
      });
    });
  }
  return data;
};

const sendMention = async (url) => {
  try {
    wm.fetch(url);
    console.log("sent:", url)
    return true;
  } catch (error) {
    console.log("failed to send:", url);
    return false;
  }
};

const main = async () => {
  const data = await loadFeeds();
  const now = new Date();
  const recentlyUpdate = data.filter(
    (item) => now - new Date(item.pubDate) < 84600 * 1000
  );

  for (const url of recentlyUpdate) {
    await sendMention(url.loc);
  }
};

main();
