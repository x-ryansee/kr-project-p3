import React from "react";
import SongCard from "./SongCard";

function SongList() {


  return (
    <div>
        <ul className="cards">{/* render SongCards components in here */}</ul>
        <SongCard />
    </div>
  );
}

export default SongList;