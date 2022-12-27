import React,{useState, useEffect} from "react";
import MenuList from "./MenuList";
import Search from "./Search";
const API="http://localhost:3000/items"

function MenuPage() {
  const [items,setItems]=useState ([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setItems(data))
  },[])

  return (
    <main>
      <Search search ={search} setSearch={setSearch}/>
      <MenuList items={items}/>
    </main>
  );
}

export default MenuPage;