

function SongCard({title, artist, image}) {

    
    return (
      <li className="card">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
      </li>
    );
  }
  
  export default SongCard;
  

