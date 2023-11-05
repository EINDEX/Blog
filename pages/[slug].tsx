import React from "react";
import { InferGetStaticPropsType } from "next";
import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../components/layout";
import { client } from "../tina/__generated__/client";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props);

  return (
    <Layout rawData={data} data={data.global as any}>
      <Blocks {...data.page} />
    </Layout>
  );
}

export const getStaticProps = async ({ params, locale }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `${locale}/${params.slug}.md`,
  });
  const props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  return {
    props: JSON.parse(JSON.stringify(props)) as typeof props,
  };
};


export const getStaticPaths = async ({ locales }) => {
  const postsListData = await client.queries.pageConnection();
  const paths = [];
  const posts = await postsListData.data;
  posts.pageConnection.edges.map((post) => {
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
