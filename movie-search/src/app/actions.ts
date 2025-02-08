"use server"

export async function getMovie(formData: FormData) {

    /*
    const movieName = formData.get("Movie") as string;

    const apiKey = process.env.OMDB_API_KEY;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
    const response = await fetch(url);
    const data = await response.json();
    
    const search = data.Search;
    */


    const search = [
      {
        title: 'Star Wars: Episode IV - A New Hope',
        year: '1977',
        imdbID: 'tt0076759',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: '1980',
        imdbID: 'tt0080684',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: '1983',
        imdbID: 'tt0086190',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode VII - The Force Awakens',
        year: '2015',
        imdbID: 'tt2488496',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode I - The Phantom Menace',
        year: '1999',
        imdbID: 'tt0120915',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode III - Revenge of the Sith',
        year: '2005',
        imdbID: 'tt0121766',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode II - Attack of the Clones',
        year: '2002',
        imdbID: 'tt0121765',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_SX300.jpg'
      },
      {
        title: 'Rogue One: A Star Wars Story',
        year: '2016',
        imdbID: 'tt3748528',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode VIII - The Last Jedi',
        year: '2017',
        imdbID: 'tt2527336',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'
      },
      {
        title: 'Star Wars: Episode IX - The Rise of Skywalker',
        year: '2019',
        imdbID: 'tt2527338',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BODg5ZTNmMTUtYThlNy00NjljLWE0MGUtYmQ1NDg4NWU5MjQ1XkEyXkFqcGc@._V1_SX300.jpg'
      }
    ]

    return search;
  }