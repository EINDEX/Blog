import { Container } from "../../components/util/container";
import { Section } from "../../components/util/section";
import { Posts } from "../../components/posts";
import { client } from "../../tina/__generated__/client";
import { Layout } from "../../components/layout";
import { InferGetStaticPropsType } from "next";

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const posts = props.data.postConnection.edges;
  const postsInLocale = posts.filter((post) => post.node._sys.relativePath.startsWith(`${props.locale}/`))
  console.log(posts[0].node)
  return (
    <Layout>
      <Section className="flex-1">
        <Container size="large" width="small">
          <Posts data={postsInLocale} />
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const tinaProps = await client.queries.pageQuery();

  return {
    props: {
      ...tinaProps,
      locale,
    },
  };
};


export type PostsType = InferGetStaticPropsType<
  typeof getStaticProps
>["data"]["postConnection"]["edges"][number];
