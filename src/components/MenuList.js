import React from "react";
import MenuItem from "./MenuItem";

function MenuList({items}) {

    const mappedItems = items?.map((item) => {
      return <MenuItem
       key={item.id}
       title={item.title}
       image={item.image}
       price={item.genre}
       />
    })

  return (
    <div>
        <ul className="cards">{mappedItems}</ul>
    </div>
  );
}

export default MenuList;