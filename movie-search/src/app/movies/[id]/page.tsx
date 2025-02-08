import { getMovieById } from "@/app/actions";

export default async function MoviePage({params}: {params: {id: string}}){
    const { id } = await params;

    getMovieById(id);


}




/*
Return from the fetch for a movie example:
{
  Title: 'Star Wars: Episode V - The Empire Strikes Back',
  Year: '1980',
  Rated: 'PG',
  Released: '18 Jun 1980',
  Runtime: '124 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'Irvin Kershner',
  Writer: 'Leigh Brackett, Lawrence Kasdan, George Lucas',
  Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
  Plot: 'After the Empire overpowers the Rebel Alliance, Luke Skywalker begins his Jedi training with Yoda. At the same time, Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.',
  Language: 'English',
  Country: 'United States',
  Awards: 'Won 1 Oscar. 27 wins & 20 nominations total',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.7/10' },
    { Source: 'Rotten Tomatoes', Value: '95%' },
    { Source: 'Metacritic', Value: '82/100' }
  ],
  Metascore: '82',
  imdbRating: '8.7',
  imdbVotes: '1,421,764',
  imdbID: 'tt0080684',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: '$292,753,960',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True'
}

*/