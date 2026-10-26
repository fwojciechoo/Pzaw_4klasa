import { useState } from "react";

interface MovieProps {
  title: string;
  poster: string;
  year: number;
  rating: number;

}

interface BookProps {
  title: string;
  cover: string;
  year: number;
  pages: number;

}

interface AlbumProps {
  title: string;
  cover: string;
  year: number;
  artist: string;
  genre: string;
  songs: {title: string, duration: string}[];
}

function Movie({ title, poster = "Nie ma zdjęcia", year, rating }: MovieProps) {
  return (
    <div className="card">
    <img src={poster} className="card-img-top" alt={title} />
  
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{year}</p>
      <p className="card-text">Ocena: {rating}/10</p>

      {rating >= 8 && <p className="polecany">Polecany</p>}
    </div>
  </div>
  );
}




function Book({title, cover = "Nie ma zdjęcia", year, pages}: BookProps){
  return(
    <div className="card">
      <img className="card-img-top" src={cover} alt={cover}/>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{year}</p>
        <p className="card-text">{pages}</p>

        {year < 2000 && <p className="klasyka">Klasyka</p>}
      </div>
    </div>
  );
}



function Album({title, cover = "Nie ma zdjęcia", year, artist, genre, songs}: AlbumProps){
  return(
    <div className="card">
      <img className="card-img-top" src={cover} alt={cover} />
      
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{artist}</p>
        <p className="card-text">{year}</p>
        <p className="card-text">{genre}</p>

          {songs.length === 0 ? (
            <p className="alert alert-info" role="alert">Brak utworów</p>
          ) : (
          <table className="table table-striped table-hover">
            <tbody>
              {songs.map((song, index) => (
                <tr key={song.title}>
                  <td>{index + 1}.</td>
                  <td className="fst-italic">{song.title}</td>
                  <td className="text-end">{song.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
      </div>
    </div>
  );
}

const movies: MovieProps[] = [
  {
    title: "Gwiezdne wojny: część III – Zemsta Sithów",
    poster: "public/Revenge of the Sith.jpg",
    year: 2005,
    rating: 8.3
  },
    {
    title: "Gwiezdne wojny: część I – Mroczne widmo",
    poster: "public/Star_Wars_Phantom_Menace.jpg",
    year: 1999,
    rating: 6.5
  },
    {
    title: "Gwiezdne wojny: część II – Atak klonów",
    poster: "public/Atak_klonow.jpg",
    year: 2002,
    rating: 6.6
  },
    {
    title: "Gwiezdne wojny: Przebudzenie Mocy",
    poster: "public/przebudzenie_mocy.jpg",
    year: 2015,
    rating: 9.0
  },
  
];

const books: BookProps[] = [
  {
    title: "Lalka",
    cover: "public/lalka.webp",
    year: 1867,
    pages: 2069
  },
  {
    title: "Hobbit",
    cover: "public/hobbit.webp",
    year: 1997,
    pages: 403
  },
    {
    title: "Balladyna",
    cover: "public/Balladyna.jpg",
    year: 1956,
    pages: 253
  }
];

const albums: AlbumProps[] = [
  {
    title: "Terrified",
    artist: "fakemink",
    cover: "public/terrified.png",
    year: 2026,
    genre: "cloud rap",
    songs: [
      { title: "Terrified .", duration: "1:31" },
      { title: "All Eyes on Me", duration: "3:17" },
      { title: "Playlist .", duration: "2:38" },
      { title: "Creep", duration: "2:19" },
      { title: "Like a Virgin", duration: "2:34" },
      { title: "Jungle-Affair .", duration: "1:37" },
      { title: "51 Ttashpel Pony Ave .", duration: "2:05" },
      { title: "Hard Candy", duration: "2:22" },
      { title: "Rewind", duration: "2:31" },
      { title: "Essex Girls .", duration: "2:50" },
      { title: "Night , Blooming Jasmine .", duration: "2:58" },
      { title: "Wrong Relief", duration: "2:21" },
      { title: "Fire & Ice .", duration: "7:02" },
      { title: "Kiss of Death", duration: "2:52" },
      { title: "Creed .", duration: "2:56" },
      { title: "Tell Me What You're Missing .", duration: "2:32" },
      { title: "Forget Me Knot .", duration: "3:09" },
      { title: "Rétard Angel .", duration: "2:52" },
      { title: "Etna .", duration: "4:57" }
    ]
  },
  {
    title: "London's Saviour",
    artist: "fakemink",
    cover: "public/londons_saviour.png",
    year: 2023,
    genre: "cloud rap",
    songs: [
      { title: "Kill Everything", duration: "3:07" },
      { title: "Phantas-Ma-Goria", duration: "1:26" },
      { title: "Just Kitten", duration: "3:18" },
      { title: "Air Head", duration: "1:17" },
      { title: "Fleeting Feeling", duration: "0:50" },
      { title: "London Life", duration: "3:33" },
      { title: "Loser Monologue", duration: "3:05" },
      { title: "Celebrity Deathmatch", duration: "3:02" },
      { title: "One More, Then I'll Sleep", duration: "1:39" }
    ]
  }
];

//Sort

movies.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => a.title.localeCompare(b.title));
albums.sort((a, b) => a.title.localeCompare(b.title));


const RecentMovies = movies.filter((movie) => movie.year > 2010).sort((a, b) => b.year - a.year);

const BooksByYear = [...books].sort((a, b) => b.year - a.year);

let LongestAlbum = albums[0];

for (const album of albums) {
  if (album.songs.length > LongestAlbum.songs.length) {
    LongestAlbum = album;
  }
}

//-----

function App() {

  //use states
  const [isMoviesOpen, setIsMoviesOpen] = useState(true);
  const [isBooksOpen, setIsBooksOpen] = useState(true);
  const [isAlbumsOpen, setIsAlbumsOpen] = useState(true);
  //-----
  
  return (
    <div className="container" data-bs-theme="dark">
      <h2 onClick={() => setIsMoviesOpen(!isMoviesOpen)}>
        Najnowsze filmy{isMoviesOpen ? " ⏷" : " ⏵"}
      </h2>
        {isMoviesOpen && (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {RecentMovies.map((movie) => (
          <div className="col" key={movie.title}>
            <Movie
              title={movie.title}
              poster={movie.poster}
              year={movie.year}
              rating={movie.rating}
            />
          </div>
        ))}
      </div>
      )}

      
      <h2 onClick={() => setIsBooksOpen(!isBooksOpen)}>
        Książki od najnowszej{isBooksOpen ? " ⏷" : " ⏵"}
      </h2>
      {isBooksOpen && (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {BooksByYear.map((book) => (
          <div className="col" key={book.title}>
            <Book
              title={book.title}
              cover={book.cover}
              year={book.year}
              pages={book.pages}
            />
          </div>
        ))}
      </div>
      )}  

      
      <h2 onClick={() => setIsAlbumsOpen(!isAlbumsOpen)}>
        Album z największą liczbą utworów{isAlbumsOpen ? " ⏷" : " ⏵"}
      </h2>
      {isAlbumsOpen && (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
        <Album
          title={LongestAlbum.title}
          artist={LongestAlbum.artist}
          cover={LongestAlbum.cover}
          year={LongestAlbum.year}
          genre={LongestAlbum.genre}
          songs={LongestAlbum.songs}
        />
        </div>
      </div>
      )}
    </div>
  );
}


export default App;