import { useEffect, useState } from "react";
import { fetchPosts } from "../util/fetchPosts";
import PostPreview from "./PostPreview";

interface Post {
  slug: string;
  title: string;
  description: string;
}

type Props = {
  posts: any;
};

export default function PostList({ posts }: Props) {
  // const [response, setResponse] = useState<[Post]>();
  // useEffect(() => {
  //   async function fetch() {
  //     let res = await fetchPosts();
  //     setResponse(res.posts);
  //   }
  //   fetch();
  // }, []);

  return (
    <div className="m-5 md:m-10">
      {posts?.map((post: any) => (
        <PostPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          description={post.description}
          image_cover={post.coverImage.url}
        />
      ))}
    </div>
  );
}
