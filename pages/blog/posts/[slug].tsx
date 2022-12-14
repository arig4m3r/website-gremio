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
  markdown: string;
}

type Props = {
  slug: any;
  post: any;
};

function PostPage({ post }: Props) {
  //const slug = "o-desmatamento-e-seus-maleficios";

  // const [post, setPost] = useState<Post>();
  // useEffect(() => {
  //   async function fetch() {
  //     let res = await fetchSinglePost(slug!);
  //     setPost(res.posts[0]);
  //   }
  //   if (slug) fetch();
  // }, [slug]);

  return (
    <>
      {post && (
        <img
          src={post?.coverImage.url}
          className="h-64 w-full object-cover"
          alt="Blog post image"
        />
      )}
      <h1 className="text-3xl lg:text-4xl font-bold flex justify-center p-5 text-center">
        {post?.title}
      </h1>

      <div className="flex justify-center text-3xl m-5 lg:m-0">
        <ReactMarkdown remarkPlugins={[gfm]} className={"prose lg:prose-xl"}>
          {post ? post?.content.markdown : ""}
        </ReactMarkdown>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let res = await fetchSinglePost("o-desmatamento-e-seus-maleficios");
  return {
    props: {
      post: res.posts[0],
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/blog/posts/o-desmatamento-e-seus-maleficios",
      // Object variant:
      { params: { slug: "o-desmatamento-e-seus-maleficios" } },
    ],
    fallback: true,
  };
}

export default PostPage;
