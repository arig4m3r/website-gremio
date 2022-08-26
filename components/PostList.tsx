import { useEffect, useState } from "react";
import { fetchPosts } from "../util/fetchPosts";
import PostPreview from "./PostPreview";

interface Post {
  slug: string;
  title: string;
  description: string;
}

export default function PostList() {
  const [response, setResponse] = useState<[Post]>();
  useEffect(() => {
    async function fetch() {
      let res = await fetchPosts();
      setResponse(res.posts);
    }
    fetch();
  }, []);

  return (
    <div className="posts">
      {response?.map((post: any) => (
        <PostPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          description={post.content.markdown}
          image_cover={post.coverImage.url}
        />
      ))}
    </div>
  );
}
