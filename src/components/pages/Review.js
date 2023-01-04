import React,{useState, useEffect} from "react";
import MenuList from "../MenuList"

const API="http://localhost:9393/foods/"

function Review() {
    const [items,setItems]=useState ([])
  
    useEffect(() =>{
      fetch(API)
      .then(res=>res.json())
      .then (data=>setItems(data))
    },[])
  
const inCart = items.filter(item => item.quantity > 0)

    return (
      <main>
        <h1 style={{color: "blue"}}>Reviews</h1>
        <MenuList items={inCart}/>
      </main>
    );
  }
  
  export default Review;
