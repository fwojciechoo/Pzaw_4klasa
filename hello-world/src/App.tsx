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
    <div>
      <img src={poster} alt={title} />
      <h4>{title}</h4>
      <p>{year}</p>
      <p>Ocena: {rating}/10</p>

      {rating >= 8 && <p>Polecany</p>}
    </div>
  );
}




function Book({title, cover = "Nie ma zdjęcia", year, pages}: BookProps){
  return(
    <div>
      <img src={cover} alt={cover}/>
      <h4>{title}</h4>
      <p>{year}</p>
      <p>{pages}</p>

      {year < 2000 && <p>Klasyka</p>}
    </div>
  );
}



function Album({title, cover = "Nie ma zdjęcia", year, artist, genre, songs}: AlbumProps){
  return(
    <div>
      <img src={cover} alt={cover} />
      <h4>{title}</h4>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>

      <ol>
        {songs.length === 0 ? (
          <p>Brak utworów</p>
        ) : (
          songs.map((element) => {
            return (
              <li key={element.title}>
                {element.title} - {element.duration}
              </li>
            );
          })
        )}
      </ol>
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
    rating: 7.9
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


const RecentMovies = movies.filter((movie) => movie.year > 2010);

const BooksByYear = [...books].sort((a, b) => b.year - a.year);

let LongestAlbum = albums[0];

for (const album of albums) {
  if (album.songs.length > LongestAlbum.songs.length) {
    LongestAlbum = album;
  }
}



function App() {
  return (
    <div>
      <div>
        <h2>Filmy wydane po 2010 roku</h2>
        {RecentMovies.map((movie) => (
          <Movie
            key={movie.title}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>

      <div>
        <h2>Książki od najnowszej</h2>
        {BooksByYear.map((book) => (
          <Book
            key={book.title}
            title={book.title}
            cover={book.cover}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </div>

      <div>
        <h2>Album z największą liczbą utworów</h2>
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
  );
}


export default App;