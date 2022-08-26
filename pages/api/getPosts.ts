import { gql, GraphQLClient } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPosts } from "../../util/fetchPosts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postList = await fetchPosts();
  res.status(200).json(postList);
}
