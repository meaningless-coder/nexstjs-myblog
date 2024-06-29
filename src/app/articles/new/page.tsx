"use client"

import React, { useState } from "react";
import {createArticle} from "@/blogAPI";
import { useRouter } from "next/navigation";

const CreateBlogPage = () => {
  const router = useRouter(); 
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createArticle(id, title, content);

    router.push("/");
    router.refresh();

  };

  return (

    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>

      <form className="bg-slate-200 shadow-lg rounded p-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-700 test-sm font-bold mb-2">URL</label>
          <input type="text" className="shadow border rounded w-full py-2 text-gray-700"
          onChange={(e) => setId(e.target.value)}></input>
        </div>
        <div>
          <label className="text-gray-700 test-sm font-bold mb-2">タイトル</label>
          <input type="text" className="shadow border rounded w-full py-2 text-gray-700"
          onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label className="text-gray-700 test-sm font-bold mb-2">本文</label>
          <textarea className="shadow border rounded w-full py-2 text-gray-700"
          onChange={(e) => setContent(e.target.value)}></textarea>
        </div>

        <button type="submit" className="py-2 px-4 border rounded-md bg-orange-300">投稿</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
