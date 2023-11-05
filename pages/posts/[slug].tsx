import { Post } from "../../components/posts/post";
import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../../components/layout";
import { InferGetStaticPropsType } from "next";

// Use the props returned by get static props
export default function BlogPostPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  if (data && data.post) {
    return (
      <Layout rawData={data} data={data.global}>
        <Post {...data.post} />
      </Layout>
    );
  }
  return (
    <Layout>
      <div>No data</div>;
    </Layout>
  );
}

export const getStaticProps = async ({ params, locale }) => {
  const tinaProps = await client.queries.blogPostQuery({
    relativePath: `${locale}/${params.slug}.mdx`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

/**
 * To build the blog post pages we just iterate through the list of
 * posts and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/posts/hello.md" would
 * be viewable at http://localhost:3000/posts/hello
 */
export const getStaticPaths = async ({ locales }) => {
  const postsListData = await client.queries.postConnection();
  const paths = [];
  const posts = await postsListData.data;
  posts.postConnection.edges.map((post) => {
    locales.map((locale) => {
      paths.push(
        {
          params: {
            slug: post.node._sys.filename,
          },
          locale,
        }
      )
    })
  })
  return {
    paths,
    fallback: "blocking",
  };
};

export type PostType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["post"];
