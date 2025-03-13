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
  const [page, setPage] = useState(1);
  const [returnedMax, setReturnedMax] = useState(false);

  useEffect(() => {
    if (query) {
      getMovies(query, 1).then((data) => {
        setMovies(data);
        setPage(1);
        setReturnedMax(data.length === 10);
      });
    } else{
      setMovies([]);
    }
  }, [query]);

  async function updateMovies(formData: FormData) {
    const searchQuery = formData.get("Movie") as string;
    router.push(`/?q=${encodeURIComponent(searchQuery)}`);

    setPage(1);
    const data = await getMovies(searchQuery);
    setMovies(data);
    setReturnedMax(data.length === 10);
  }

  async function loadMore() {
    const nextPage = page + 1;
    const moreMovies = await getMovies(query, nextPage);

    if(moreMovies.length > 0){
      setMovies((prevMovies) => [...prevMovies, ...moreMovies]);
      setPage(nextPage);
    }

    if(moreMovies.length < 10){
      setReturnedMax(false);
    }
  }

  

  return (
    <div className="min-h-screen text-white p-6">
      <h1 className="text-center py-20 text-4xl mb-4">Movie Search</h1>
      <div className="flex justify-center items-center gap-4 flex-col">
        <form action={updateMovies} className="mb-4 flex items-center gap-4">
          <input
        type="text"
        className="p-2 border border-gray-800 text-black rounded-md"
        placeholder="Enter movie name"
        name="Movie" required
        defaultValue={query}
          />
          <button className="p-2 bg-blue-500 text-white rounded-md" 
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

        {returnedMax && (
          <button
            onClick={loadMore}
            className="p-2 bg-green-500 text-white rounded-md mt-4"
          >
            Show More Results
          </button>
        )}
      </div>
     
    </div>
   
  );
}
