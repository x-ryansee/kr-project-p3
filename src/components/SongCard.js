import React, {useState} from "react";

function SongCard({title, artist, image, songURL}) {

    // const [toggle, setToggle] = useState(false)
    // console.log(toggle)


  


    return (
      <li className="card">
        <img src={image} alt={title} />
        <div className="ratio ratio-1x1">
          <iframe width="200" height="100" src={songURL}></iframe>
        </div>
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
        <button  className='Play'>Play</button>
      </li>
    );
  }
  
  export default SongCard;
  

