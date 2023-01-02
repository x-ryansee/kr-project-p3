import React,{useState, useEffect} from "react";
import MenuList from "../MenuList";

const API="http://localhost:3000/items"

function ShoppingCart() {
    const [items,setItems]=useState ([])
  
    useEffect(() =>{
      fetch(API)
      .then(res=>res.json())
      .then (data=>setItems(data))
    },[])
  
const inCart = items.filter(item => item.quantity > 0)

    return (
      <main>
        <h1 style={{color: "blue"}}>Shopping Cart</h1>
        <MenuList items={inCart}/>
      </main>
    );
  }
  
  export default ShoppingCart;

  