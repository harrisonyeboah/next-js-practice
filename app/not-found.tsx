"use client";
import { usePathname } from
    "next/navigation";

export default function NotFound() {
    const pathname = usePathname(); // This is for client component to get the current path
    const segments = pathname.split("/").filter(Boolean); // Split the path into segments and filter out empty ones
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-2xl font-bold mb-4">404 - Not Found</h1>
            <p>Hey bro your page {segments[0]} is not found</p>
        </div>
    );
}