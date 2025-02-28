"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackButton(){
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q") || "";

    return (
        <Link
        href={`/?q=${encodeURIComponent(searchQuery)}`} 
        className="flex items-center self-start ml-4 mt-4 p-2 rounded-full hover:bg-gray-700 transition"
      >
          <span className="text-xl mr-2 flex items-center">&larr;</span> 
          <span className="text-xl">Back to Home</span>
      </Link>
    )
}