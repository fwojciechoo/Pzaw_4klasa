interface FilmProps {
  title: string;
  poster: string;
  year: number;

}

function Film({title, poster = "Nie ma zdjęcia", year}: FilmProps){
  return(
    <div>
      <img src={poster} alt={poster}/>
      <h4>{title}</h4>
      <p>{year}</p>
    </div>
  );
}

interface BookProps {
  title: string;
  cover: string;
  year: number;
  pages: number;

}

function Book({title, cover = "Nie ma zdjęcia", year, pages}: BookProps){
  return(
    <div>
      <img src={cover} alt={cover}/>
      <h4>{title}</h4>
      <p>{year}</p>
      <p>{pages}</p>
    </div>
  );
}


interface AlbumProps {
  title: string;
  cover: string;
  year: number;
  artist: string;
  genre: string;
  songs: {title: string, duration: string}[];
}


function Album({title, cover = "Nie ma zdjęcia", year, artist, genre, songs}: AlbumProps){
  return(
    <div>
      <img src={cover} alt={cover}/>
      <h4>{title}</h4>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <ol>
        {songs.map(element => {
          return(
            <li>{element.title} - {element.duration}</li>
          );
        })

        }
      </ol>
    </div>
  );
}

function App(){
  return(
    <div>

      <div>
        <Film title="Gwiezdne wojny: część III – Zemsta Sithów" poster="public/Revenge of the Sith.jpg" year = {2005}/>
        <Film title="Gwiezdne wojny: część I – Mroczne widmo" poster="public/Star_Wars_Phantom_Menace.jpg" year = {1999}/>
        <Film title="Gwiezdne wojny: część III – Zemsta Sithów" poster="public/Atak_klonow.jpg" year = {2002}/>
      </div>

      <div>
        <Book title="Lalka" cover="public/lalka.webp" year = {1867} pages={2069}/>
        <Book title="Hobbit" cover="public/hobbit.webp" year = {1997} pages={403}/>
        <Book title="Balladyna" cover="public/Balladyna.jpg" year = {1956} pages={253}/>
      </div>

      <div>
        <Album title="Terrified" artist="fakemink" cover="public/terrified.png" year = {2026} genre="cloud rap" songs = {[
          {title: "Terrified .", duration: "1:31"},
          {title: "All Eyes on Me", duration: "3:17"},
          {title: "Playlist .", duration: "2:38"},
          {title: "Creep", duration: "2:19"},
          {title: "Like a Virgin", duration: "2:34"},
          {title: "Jungle-Affair .", duration: "1:37"},
          {title: "51 Ttashpel Pony Ave .", duration: "2:05"},
          {title: "Hard Candy", duration: "2:22"},
          {title: "Rewind", duration: "2:31"},
          {title: "Essex Girls .", duration: "2:50"},
          {title: "Night , Blooming Jasmine .", duration: "2:58"},
          {title: "Wrong Relief", duration: "2:21"},
          {title: "Fire & Ice .", duration: "7:02"},
          {title: "Kiss of Death", duration: "2:52"},
          {title: "Creed .", duration: "2:56"},
          {title: "Tell Me What You're Missing .", duration: "2:32"},
          {title: "Forget Me Knot .", duration: "3:09"},
          {title: "Rétard Angel .", duration: "2:52"},
          {title: "Etna .", duration: "4:57"}
        ]}/>

        <Album title="London's Saviour" artist="fakemink" cover="public/londons_saviour.png" year = {2023} genre="cloud rap" songs = {[
          {title: "Kill Everything", duration: "3:07"},
          {title: "Phantas-Ma-Goria", duration: "1:26"},
          {title: "Just Kitten", duration: "3:18"},
          {title: "Air Head", duration: "1:17"},
          {title: "Fleeting Feeling", duration: "0:50"},
          {title: "London Life", duration: "3:33"},
          {title: "Loser Monologue", duration: "3:05"},
          {title: "Celebrity Deathmatch", duration: "3:02"},
          {title: "One More, Then I'll Sleep", duration: "1:39"}
        ]}/>
        
      </div>

    </div>

  )
}

export default App;