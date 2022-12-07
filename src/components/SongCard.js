import React, {useState} from "react";
import SongList from "./SongList";

function SongCard({id, title, artist, image, songURL, Link}) {

    // const [toggle, setToggle] = useState(false)
    // console.log(toggle)


  


    return (
      <li className="card">
        <img src={image} alt={title} />
        {/* <div className="ratio ratio-1x1">
          <iframe width="200" height="100" src={songURL}></iframe>
        </div> */}
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
        {/* <Link to={`songs/${id}`}> */}
          <button className='Play'>Play</button>
        {/* </Link> */}
      </li>
    );
  }
  
  export default SongCard;
  

st