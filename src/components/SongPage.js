import React,{useState, useEffect} from "react";
import SongList from "./SongList";
import Search from "./Search";
import AddSongForm from "./AddSongForm";
const API="http://localhost:3000/songs"

function SongPage() {
  const [songs,setSongs]=useState ([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setSongs(data))
  },[])

  const displayedSongs = songs.filter((song) => {
    return song.title.toLowerCase().includes(search.toLowerCase());
  })

  function newSong(obj) {
    setSongs([...songs, obj]);
  }

  return (
    <main>
      <Search search ={search} setSearch={setSearch}/>
      <SongList songs={displayedSongs}/>
      <AddSongForm newSong={newSong}/>
    </main>
  );
}

export default SongPage;