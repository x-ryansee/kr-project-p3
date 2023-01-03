import { useState } from "react";

function MenuItem({ title, image, price}) {



    const [quantity, setQuantity] = useState(false)
 
  
  
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