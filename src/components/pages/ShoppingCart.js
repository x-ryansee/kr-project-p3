import React,{useState, useEffect} from "react";
import MenuList from "../MenuList";
import Search from "../Search";
const API="http://localhost:3000/items"

function ShoppingCart() {
    const [items,setItems]=useState ([])
    const [search, setSearch] = useState('')
  
    useEffect(() =>{
      fetch(API)
      .then(res=>res.json())
      .then (data=>setItems(data))
    },[])
  
    // const displayedItems = items.filter((item) => {
    //   return item.title.toLowerCase().includes(search.toLowerCase());
    // })

    return (
      <main>
        <h1 style={{color: "blue"}}>Shopping Cart</h1>
        <Search search ={search} setSearch={setSearch}/>
        <MenuList items={items}/>
      </main>
    );
  }
  
  export default ShoppingCart;

  