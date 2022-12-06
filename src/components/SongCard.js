

function SongCard({title, artist, image, audio}) {

    
    return (
      <li className="card">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
        {/* <audio src={audio} controls></audio> */}
      </li>
    );
  }
  
  export default SongCard;
  

