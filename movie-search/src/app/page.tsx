"use client"

import { useState, useEffect } from "react";
import { getMovies } from "./actions";
import MovieButton from "./components/movie-button";
import { Movie } from "./models/movie";
import { useRouter, useSearchParams } from "next/navigation";


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") as string;

  useEffect(() => {
    if (query) {
      getMovies(query).then(setMovies);
    }
  }, [query]);

  async function updateMovies(formData: FormData) {

    const searchQuery = formData.get("Movie") as string;
    router.push(`/?q=${encodeURIComponent(searchQuery)}`);

    const data = await getMovies(searchQuery);
    setMovies(data);
  }

  

  return (
    <div className="min-h-screen text-white p-6">
      <h1 className="text-center py-20 text-4xl mb-4">Movie Search</h1>
      <div className="flex justify-center items-center gap-4 flex-col">
        <form action={updateMovies} className="mb-4">
          <input
            type="text"
            className="p-2 border border-gray-800 text-black rounded-md"
            placeholder="Enter movie name"
            name="Movie" required
            defaultValue={query}
          />
          <button className="p-2 bg-blue-500 text-white rounded-sm" 
          type="submit">
            Search
          </button>
        </form>
        <div className="grid grid-cols-4 gap-4 py-10">
            {movies.length > 0 ? (
            movies.map((movie: Movie) => (
                <MovieButton key={movie.imdbID} movie={movie} />
            ))
            ) : (
              <p className="text-center col-span-4"></p>
            )}
        </div>
      </div>
     
    </div>
   
  );
}
