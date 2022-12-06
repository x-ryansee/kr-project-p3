import React from "react";
import SongCard from "./SongCard";

function SongList({songs}) {

    const listOfSongs = songs?.map((song) => {
      return <SongCard key={song.id} title={song.title} artist={song.artist} />
    })

  return (
    <div>
        <ul className="cards">{listOfSongs}</ul>
    </div>
  );
}

export default SongList;