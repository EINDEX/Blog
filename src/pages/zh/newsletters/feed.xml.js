import rss from "@astrojs/rss";
import { getNewsletters } from "@utils/posts";
import { getLinkViaLocale, getLastPartOfSlug } from "@utils/slug";

const locale = "zh";

export async function get(context) {
  const newsletter = await getNewsletters(locale);

  return rss({
    // `<title>` field in output xml
    title: "EINDEX's Newsletters",
    // `<description>` field in output xml
    description: "EINDEX's Newsletters",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: newsletter.map((thought) => {
      return {
        title: thought.body,
        description: thought.body,
        link: getLinkViaLocale(locale, "/newsletters/" + getLastPartOfSlug(thought.slug)),
        pubDate: thought.data.updated || thought.data.date,
      };
    }),

    // (optional) inject custom xml
    customData: `<language>${locale}</language>`,
  });
}
