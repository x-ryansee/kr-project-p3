import React, { useEffect } from "react";
import SongList from "./SongList";
import Search from "./Search";

function SongPage() {

  useEffect(() => {
    fetch("http://localhost:3000")
    .then((r) => r.json())
    .then(data => console.log(data))
  })

  return (
    <main>
      <Search />
      <SongList />
    </main>
  );
}

export default SongPage;