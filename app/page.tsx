import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1> Welcome home </h1>
      <Link href='/blog'> Blog </Link>
      <Link href='/products'> Products </Link>
      <Link href='/articles/breaking-news-123?lang=en'> Read in English </Link>
      <Link href='/articles/breaking-news-123?lang=fr'> Read in French </Link>
    </div>
  );
}
