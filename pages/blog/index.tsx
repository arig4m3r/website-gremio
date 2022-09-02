import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import PostList from "../../components/PostList";
import PostPreview from "../../components/PostPreview";
import { fetchPosts } from "../../util/fetchPosts";

type Props = {
  posts: any;
};

export default function index({ posts }: Props) {
  return (
    <div>
      <Layout>
        <h1 className="flex justify-center text-3xl font-bold pb-3">
          Ultimas postagens
        </h1>
        <PostList posts={posts} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  let res = await fetchPosts();
  return {
    props: {
      posts: res.posts,
    },
  };
};
