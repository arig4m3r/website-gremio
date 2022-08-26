import Image from "next/image";
import React from "react";

type Props = {
  slug: string;
  title: string;
  description: string;
  image_cover: string;
};

export default function PostPreview({
  slug,
  title,
  description,
  image_cover,
}: Props) {
  return (
    <a
      href={`/blog/posts/${slug}`}
      className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-full hover:bg-gray-100"
    >
      <Image
        width={"100%"}
        height={"100%"}
        src={image_cover}
        alt={""}
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      />

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
      </div>
    </a>
  );
}
