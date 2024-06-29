import { Article } from "../types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((articles) => (
        <article className="shadow my-4" key={articles.id}>
          <Link href={`articles/${articles.id}`} className="hover:opacity-75">
            <Image
              src="/28927685_s.jpg"
              alt=""
              width={900}
              height={300}
            ></Image>
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link
              href="#"
              className="text-blue-700 text-sm font-bold uppercase pb-4"
            >
              Technology
            </Link>
            <Link
              href={`articles/${articles.id}`}
              className="text-3xl font-bold text-slate-900 hover:text-gray-700 pb-4"
            >
              {articles.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">{articles.created_at}</p>
            <a className="text-slate-900 pb-6">{articles.content}</a>
            <Link
              href={`articles/${articles.id}`}
              className="text-pink-800 hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
