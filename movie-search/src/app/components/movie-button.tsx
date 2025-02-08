import { Movie } from "../models/movie";
import Image from 'next/image';

interface MovieButtonProps {
  movie: Movie;
}

export default function MovieButton({ movie }: MovieButtonProps) {
    return (
        <button className="p-4 bg-white shadow-md rounded-lg text-gray-700 w-full hover:shadow-xl transition-shadow">
        <Image
          src={movie.poster}
          alt={movie.title}
          className="w-full h-auto rounded-md mb-4"
          width={500} // Adjust width as needed
          height={750} // Adjust height as needed
        />
        
        
        {/* Movie Title */}
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        
        {/* Movie Year */}
        <p className="text-sm text-gray-500">{movie.year}</p>
        
        {/* Movie Type */}
        <p className="text-sm text-gray-500">{movie.type}</p>
      </button>
    );
}
