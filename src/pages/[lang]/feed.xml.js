import rss from "@astrojs/rss";
import { getPosts } from "@utils/posts";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { useTranslations } from "@i18n/utils";
import { getLastPartOfSlug } from "@utils/slug";

export const prerender = true;
export function getStaticPaths() {
  return [{ params: { lang: "zh" } }, { params: { lang: "en" } }];
}

const parser = new MarkdownIt();

export async function GET(context) {
  const locale = context.params.lang;
  const t = useTranslations(locale);
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
    items: posts.slice(0, 10).map((post) => {
      const item = {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || "",
        content: sanitizeHtml(parser.render(post.body)),
        author: "EINDEX",
        link: `${locale}/posts/${getLastPartOfSlug(post.slug)}/`,
      };
      
      item.categories = [];
      if (post.data.series) {
        item.categories = [t(`series.${post.data.series}`)];
      }
      if (post.data.tags) {
        item.categories = item.categories.concat(post.data.tags);
      }
      return item;
    }),

    // (optional) inject custom xml
    customData: `<language>${locale}</language>`,
  });
}
