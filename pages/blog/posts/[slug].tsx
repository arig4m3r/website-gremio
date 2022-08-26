import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { fetchSinglePost } from "../../../util/fetchSinglePost";

interface Post {
  slug: string;
  title: string;
  content: Content;
  coverImage: CoverImage;
}

interface CoverImage {
  url: string;
  height: number;
  width: number;
}

interface Content {
  html: string;
  markdown: number;
  raw: number;
}

export default function index() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<Post>();
  useEffect(() => {
    async function fetch() {
      let res = await fetchSinglePost(slug!);
      setPost(res.posts[0]);
    }
    if (slug) fetch();
  }, [slug]);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold flex justify-center p-5">
        {post?.title}
      </h1>

      <p className="text-xl font-medium flex justify-center p-5">
        {post?.content.html}
      </p>
      <Footer />
    </>
  );
}