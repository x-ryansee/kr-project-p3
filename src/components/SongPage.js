import React from "react";
import SongList from "./SongList";
import Search from "./Search";

function SongPage({ songs }) {

  return (
    <main>
      <Search />
      <SongList songs={songs}/>
    </main>
  );
}

export default SongPage;