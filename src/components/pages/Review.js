import React,{useState, useEffect} from "react";
import MenuList from "../MenuList"

const API="http://localhost:9393/reviews"

function Review() {
    const [items,setItems]=useState ([])
  
    useEffect(() =>{
      fetch(API)
      .then(res=>res.json())
      .then (data=>(data))
      
    },[])
  

    return (
      <main>
        <h1 style={{color: "blue"}}>Reviews</h1>
        <MenuList />
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
      </main>
    );
}
  
  export default Review;
