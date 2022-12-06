

function SongCard() {

    
    return (
      <li className="card">
        <img src={"https://via.placeholder.com/400"} alt={"song name"} />
        <h4>{"song name"}</h4>
        <p>Artist: {"artist name"}</p>
        {true ? (
          <button className="primary">View</button>
        ) : (
          <button>Favorite</button>
        )}
      </li>
    );
  }
  
  export default SongCard;