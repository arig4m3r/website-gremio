import { GraphQLClient, gql } from "graphql-request";

export async function fetchPosts() {
  const qlClient = new GraphQLClient(
    "https://api-sa-east-1.hygraph.com/v2/cl7028h9a0xx101uoavwu1mnl/master"
  );
  const query = gql`
    {
      posts {
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
  return qlClient.request(query);
}
