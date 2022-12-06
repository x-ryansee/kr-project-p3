import React from "react";
import SongList from "./SongList";
import Search from "./Search";

function SongPage() {
  return (
    <main>
      <Search />
      <SongList />
    </main>
  );
}

export default SongPage;