import React,{useState, useEffect} from "react";
import SongList from "./SongList";
import Search from "./Search";
const API="http://localhost:3000/songs"

function SongPage() {
  const[songs,setSongs]=useState ([])

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setSongs(data))
  },[])


  return (
    <main>
      <Search />
      <SongList songs={songs}/>
    </main>
  );
}

export default SongPage;