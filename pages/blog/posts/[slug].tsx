import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { fetchSinglePost } from "../../../util/fetchSinglePost";
import gfm from "remark-gfm";

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
  markdown: string;
  raw: string;
}

function PostPage() {
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
      <img src={post?.coverImage.url} class="h-24 w-full object-cover" alt="Blog post image" />
      <h1 className="text-3xl font-bold flex justify-center p-5">
        {post?.title}
      </h1>

      <div className="flex justify-center text-2xl">
        <p>
          <ReactMarkdown remarkPlugins={[gfm]}>
            {post ? post?.content.markdown : ""}
          </ReactMarkdown>
        </p>
      </div>

      {/* <p className="text-xl font-medium flex justify-center p-5">
        {post?.content.html}
      </p> */}
      <Footer />
    </>
  );
}

export default PostPage;
