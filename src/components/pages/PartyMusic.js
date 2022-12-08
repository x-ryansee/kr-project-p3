import React,{useState, useEffect} from "react";
import SongList from "../SongList";
import Search from "../Search";
const API="http://localhost:3000/songs"

function PartyMusic() {
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
  
    const onlyPartySongs = songs.filter(song => song.genre == 'Party')

    return (
      <main>
        <h1 style={{color: "blue"}}>Party</h1>
        <Search search ={search} setSearch={setSearch}/>
        <SongList songs={onlyPartySongs}/>
      </main>
    );
  }
  
  export default PartyMusic;