"use client";
import { useState } from "react";
import { MovieDetails } from "../models/movieDetails";


interface AdditionalInfoProps {
  movie: MovieDetails;
}

export default function AdditionalInfo({ movie }: AdditionalInfoProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowMore(!showMore)} 
        className="mt-6 w-full p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        {showMore ? "Hide Additional Info" : "Show Additional Info"}
      </button>

      {showMore && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writers:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>

          <div className="mt-4">
            <h3 className="font-bold">Other Ratings:</h3>
            <ul className="list-disc ml-6">
              {movie.Ratings.map((rating, index) => (
                <li key={index}>
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
