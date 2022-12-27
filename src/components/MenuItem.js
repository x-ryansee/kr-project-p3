import React from "react";

function MenuItem({id, title, image, price}) {

  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  //   } = useShoppingCart()

    // const quantity = getItemQuantity(id)


    const quantity = 0
  
    return (
      <li className="card">
        <img height="200px" src={image} alt={title} />
        <h4>{title}</h4>
        <p>Price: {price}</p>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button onClick="Hello!" > + Add to cart </button>
          ) : (
            <div className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}>
              <div className="d-flex align-items-center"
                style= {{ gap: ".5rem" }}>
                <button>-</button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <button>+</button>
              </div>
              <button variant="danger" size="sm">Remove</button>
            </div>
          )}

        </div>
      </li>
    );
  }
  
  export default MenuItem;