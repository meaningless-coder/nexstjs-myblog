import { revalidatePath } from "next/cache";
import { Article } from "./app/types";
import { notFound } from "next/navigation";
import { resolve } from "path";

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"});

    const articles = await res.json();
    return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {next: {revalidate: 60}});

    if (res.status == 404) {
        notFound();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const article = await res.json();
    return article;
};

export const createArticle = async (
    id: string,
    title: string,
    content: string
): Promise<Article> => {
    const currentDate = new Date().toDateString();

    const res = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, title, content, createdAt: currentDate}),
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newArticle = await res.json();
    return newArticle;
}