import React from "react";
import MenuItem from "./MenuItem";

function MenuList({foods}) {

    const mappedFoods= foods?.map((food) => {
      return <MenuItem
       key={food.id}
       title={food.title}
       image={food.image}
       price={food.price}
       />
    })

  return (
    <div>
        <ul className="cards">{mappedFoods}</ul>
    </div>
  );
}

export default MenuList;