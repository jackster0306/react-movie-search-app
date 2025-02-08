import { Movie } from "../models/movie";
import Image from 'next/image';
import Link from 'next/link';

interface MovieButtonProps {
  movie: Movie;
}

export default function MovieButton({ movie }: MovieButtonProps) {
    return (
      <Link href={`/movies/${movie.imdbID}`} 
      className="p-4 bg-white shadow-md rounded-lg text-gray-700 w-full hover:shadow-xl transition-shadow">
        <button 
        className="flex flex-col items-center">
            <div className="relative w-48 h-60 md:w-48 md:h-72 lg:w-64 lg:h-96">
              <Image
                src={movie.poster}
                alt={movie.title}
                className="object-cover rounded-md mb-4"
                fill={true}
              />
            </div>
          {/* Movie Title */}
          <h2 className="text-lg font-semibold mt-4">{movie.title}</h2>
          
          {/* Movie Year */}
          <p className="text-sm text-gray-500">{movie.year}</p>
          
          {/* Movie Type */}
          <p className="text-sm text-gray-500">{movie.type}</p>
        </button>
      </Link>
        
    );
}
