import React from "react";
import Image from "next/image";
import {getDetailArticle} from "@/blogAPI"

const Article = async ({ params }: { params: { id: string } }) => {

  const detailArticle = await getDetailArticle(params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image src="/28927685_s.jpg" alt="" width={900} height={300}></Image>

      <h1 className="text-4xl text-center mb-10 mt-10">{detailArticle.title}</h1>
      <div className="text-lg leading-relaxed text-justify"><p></p>{detailArticle.content}</div>
    </div>
  );
};

export default Article;
