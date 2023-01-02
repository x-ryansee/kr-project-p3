import { useState } from "react";

function MenuItem({id, title, image, price}) {

  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  //   } = useShoppingCart()

    // const quantity = getItemQuantity(id)

    const [quantity, setQuantity] = useState(false)
    let buttonText;
    if (quantity === 0) {
      buttonText = "Add to cart";
    } else if (quantity === 1) {
      buttonText = "I've been clicked once!";
    } else {
      buttonText = `I've been clicked ${quantity} times!`;
    }
  
  
    return (
      <li className="card">
        <img height="200px" src={image} alt={title} />
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
            </div>
      </li>
    );
  }
  
  export default MenuItem;