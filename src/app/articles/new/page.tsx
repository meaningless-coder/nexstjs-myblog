import React from "react";

const CreateBlogPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>

      <form className="bg-slate-200 shadow-lg rounded p-6">
        <div>
          <label className="text-gray-700 test-sm font-bold mb-2">URL</label>
          <input type="text" className="shadow border rounded w-full py-2 test-gray-700"></input>
        </div>
        <div>
          <label className="text-gray-700 test-sm font-bold mb-2">タイトル</label>
          <input type="text" className="shadow border rounded w-full py-2 test-gray-700"></input>
        </div>
        <div>
          <label className="text-gray-700 test-sm font-bold mb-2">本文</label>
          <textarea className="shadow border rounded w-full py-2 test-gray-700"></textarea>
        </div>

        <button type="submit" className="py-2 px-4 border rounded-md bg-orange-300">投稿</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
