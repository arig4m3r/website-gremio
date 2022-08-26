import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import PostList from "../../components/PostList";
import PostPreview from "../../components/PostPreview";

export default function index() {
  return (
    <div>
      <Layout>
        <h1 className="flex justify-center text-3xl font-bold pb-3">
          Ultimas postagens
        </h1>
        <PostList />
      </Layout>
    </div>
  );
}
