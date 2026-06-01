import Link from 'next/link'
"use client"
import { use } from "react";
export default async function NewsArticle({ params, searchParams, }:{ params: Promise<{articleId: string}>; searchParams : Promise<{lang?: "en" | "es" | "fr"}>;}) {
    const { articleId } = use(params);
    const {lang = "en"} = use(searchParams);
    // We would await the promise in server but we would use react {use} for client. This is becauase server does not use react state. 
    return (
        <>
            <h1>We ar reading article {articleId}</h1>
            <h1> We are reading the article in {lang}</h1>
        </>
    )
}

