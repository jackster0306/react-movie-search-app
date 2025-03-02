"use client";

import { Movie } from "../models/movie";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

interface MovieButtonProps {
  movie: Movie;
}

export default function MovieButton({ movie }: MovieButtonProps) {
    const params = useSearchParams();
    const query = params.get("q") || "";

    return (
      <Link href={`/movies/${movie.imdbID}?q=${encodeURIComponent(query)}`} 
      className="p-4 bg-white shadow-md rounded-lg text-gray-700 w-full hover:shadow-xl transition-shadow">
        <button 
        className="flex flex-col items-center">
            <div className="relative w-48 h-60 md:w-48 md:h-72 lg:w-64 lg:h-96">
              <Image
                src={movie.Poster}
                alt={movie.Title}
                className="object-cover rounded-md mb-4"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          {/* Movie Title */}
          <h2 className="text-lg font-semibold mt-4">{movie.Title}</h2>
          
          {/* Movie Year */}
          <p className="text-sm text-gray-500">{movie.Year}</p>
          
          {/* Movie Type */}
          <p className="text-sm text-gray-500">{movie.Type}</p>
        </button>
      </Link>
        
    );
}
