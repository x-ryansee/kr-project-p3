import React from "react";
import SongCard from "./SongCard";

function SongList({songs}) {

    const mappedSongs = songs.map((song) => {
      return <SongCard
       key={song.id} 
       title={song.title} 
       artist={song.artist} 
       image={song.image}
       genre={song.genre}
       songURL={song.songURL}
       />
    })

  return (
    <div>
        <ul className="cards">{mappedSongs}</ul>
    </div>
  );
}

export default SongList;