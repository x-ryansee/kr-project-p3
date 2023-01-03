import { useState } from "react";

function MenuItem({ title, image, price}) {
 

    const [quantity, setQuantity] = useState(false)
//  not sure if this works
  function handleAddToCart(e) {
    e.preventDefault();
    var qty = document.getElementById("quantity");
    qty.value = qty.value + 1;
    setQuantity(quantity + 1);
  }
  
    return (
      <li className="card">
        <img height="190px" src={image} alt={title} />
        <h4>{title}</h4>
        <p>Price: {price}</p>
            <div className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}>
              <div className="d-flex align-items-center"
                style= {{ gap: ".5rem" }}>
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button name="Add to cart"
              className="Button"
              onClick={handleAddToCart}> Add to Cart </button>
            </div>
      </li>
    );
  }
  
  export default MenuItem;