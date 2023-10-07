import rss from "@astrojs/rss";
import { getThoughts } from "@utils/posts";
import { getLinkViaLocale, getLastPartOfSlug } from "@utils/slug";

const locale = "zh";

export async function get(context) {
  const thoughts = await getThoughts(locale);

  return rss({
    // `<title>` field in output xml
    title: "EINDEX's Thoughts",
    // `<description>` field in output xml
    description: "EINDEX's Thoughts",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: thoughts.map((thought) => {
      return {
        title: thought.body,
        description: thought.body,
        link: getLinkViaLocale(locale, "/thoughts/" + getLastPartOfSlug(thought.slug)),
        pubDate: thought.data.updated || thought.data.date,
      };
    }),

    // (optional) inject custom xml
    customData: `<language>${locale}</language>`,
  });
}
