import { getMovieById } from "@/app/actions";
import Image from "next/image";
import { Suspense } from "react";
import AdditionalInfo from "@/app/components/additional-info";



export default async function MoviePage({params}: {params: {id: string}}){
    const { id } = await params;
    const movie = await getMovieById(id);



    return (
      <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Title and Poster */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={300}
          height={450}
          className="rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p className="text-gray-400">{movie.Released} | {movie.Rated}</p>
          <p className="text-blue-400">{movie.Genre}</p>
          <p className="text-sm mt-2">{movie.Plot}</p>

          {/* IMDb Ratings */}
          <div className="mt-4">
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p className="text-yellow-400"><strong>IMDb:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
            <p className="text-green-400"><strong>Metascore:</strong> {movie.Metascore}</p>
          </div>
        </div>
      </div>

      {/* Show More Section */}
      <Suspense fallback={<p>Loading additional info...</p>}>
        <AdditionalInfo movie={movie} />
      </Suspense>
    </div>
    );


}