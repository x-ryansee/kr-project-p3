import React,{useState, useEffect} from "react";
import ReviewList from "./ReviewList"

const API="http://localhost:9393/reviews"

function Review() {
  const [items,setItems]=useState ([])

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setItems(data))
  },[])
console.log(setItems)
console.log(items)

    return (
      <main>
      <h1 style={{color: "blue"}}>Reviews</h1>
      <form className="Form">
    <fieldset>
       <label className="Name">
         <p>Name</p>
         <input name="name"placeholder="Your name.." />
         <p>Description</p>
         <input name="Description" placeholder="Description.."/>
         <p>Rating</p>
         <input name="Rating" placeholder="Rating.."/>
       </label>
     </fieldset>
     <button type="submit">Submit</button>
    </form>
    <ReviewList items={items} />
    <div>
    {items ? (
      <li>
        {items.map((item) => (
          <li key={item.id}>{item.name}{item.description}{item.rating}</li>
        ))}
      </li>
    ) : (
      'Loading...'
    )}
  </div>
    </main>
    
  );
}
  
  export default Review;
