import React,{useState, useEffect} from "react";
import MenuList from "./MenuList";
import Search from "./Search";
const API="http://localhost:3000/foods"

function MenuPage() {
  const [foods,setFoods]=useState ([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setFoods(data))
  },[])

  return (
    <main>
      <Search search ={search} setSearch={setSearch}/>
      <MenuList foods={foods}/>
    </main>
  );
}

export default MenuPage;