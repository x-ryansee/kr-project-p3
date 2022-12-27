// import React,{useState, useEffect} from "react";
// import MenuList from "../MenuList";
// import Search from "../Search";
// const API="http://localhost:3000/items"

// function StudyMusic() {
//     const [search, setSearch] = useState('')
  
//     useEffect(() =>{
//       fetch(API)
//       .then(res=>res.json())
//       .then (data=>console.log(data))
//     },[])
  
//     return (
//       <main>
//         <h1 style={{color: "red"}}>Study</h1>
//         <Search search ={search} setSearch={setSearch}/>
//         <MenuList />
//       </main>
//     );
//   }
  
//   export default StudyMusic;