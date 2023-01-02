import React,{useState, useEffect} from "react";
import MenuList from "../MenuList";

const API="http://localhost:3000/foods"

function ShoppingCart() {
    const [foods,setFoods]=useState ([])
  
    useEffect(() =>{
      fetch(API)
      .then(res=>res.json())
      .then (data=>setFoods(data))
    },[])
  
const inCart = foods.filter(foods => foods.quantity > 0)

    return (
      <main>
        <h1 style={{color: "blue"}}>Shopping Cart</h1>
        <MenuList foods={inCart}/>
      </main>
    );
  }
  
  export default ShoppingCart;

  