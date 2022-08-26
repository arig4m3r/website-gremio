import { GraphQLClient, gql } from "graphql-request";

export async function fetchSinglePost(slug: string | string[]) {
  const qlClient = new GraphQLClient(
    "https://api-sa-east-1.hygraph.com/v2/cl7028h9a0xx101uoavwu1mnl/master"
  );
  const query = gql`
    query getSinglePost($slug: String!) {
      posts(where: { slug: $slug }) {
        slug
        id
        title
        coverImage {
          url
          height
          width
        }
        content {
          markdown
          html
          raw
        }
        publishedBy {
          name
        }
        createdBy {
          name
        }
      }
    }
  `;

  let queryArguments = {
    slug,
  };

  return qlClient.request(query, queryArguments);
}
