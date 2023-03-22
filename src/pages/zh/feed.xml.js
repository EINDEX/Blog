import rss from "@astrojs/rss";
import { getPosts } from "@utils/posts";
import { getLinkViaLocale, getLastPartOfSlug } from "@utils/slug";

const locale = "zh";

export async function get(context) {
  const posts = await getPosts(locale);

  return rss({
    // `<title>` field in output xml
    title: "EINDEX's Blog",
    // `<description>` field in output xml
    description: "EINDEX's Blog",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        link: getLinkViaLocale(locale, "posts/" + getLastPartOfSlug(post.slug)),
        pubDate: post.data.updated || post.data.date,
      };
    }),

    // (optional) inject custom xml
    customData: `<language>${locale}</language>`,
  });
}
