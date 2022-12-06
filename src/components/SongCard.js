import React from "react";

function SongCard({title, artist, image, audio}) {
 
   
    return (
      <li className="card">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
        {/* <audio src={audio} controls></audio> */}
        <button  class='Play'>Play</button>
      </li>
    );
  }
  
  export default SongCard;
  

