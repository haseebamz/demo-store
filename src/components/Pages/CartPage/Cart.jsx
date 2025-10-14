import React, { useContext, useState } from "react";
import { DataContext } from "../../../App";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, setCartItems, setCartCount } = useContext(DataContext);
  // const [priceByQuantity, setPriceByQuantity] = useState(cartItems.map((item) => (item.price) ))
  // const [productQuantity, setProductQuantiy] = useState(1)

  // Handle quantity change
  const handleQuantityChange = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) } // avoid going below 1
        : item
    );
    setCartItems(updatedCart);
  };

  // Calculate total cart price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);


    // handle cart remove 
 const handleCartRemove = (id) => {
  const updatedCart = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedCart);
  setCartCount(updatedCart.length);
};

  return (
    <div className={styles.cartWrap}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {cartItems.length > 0 ? (
              <>
                <h2> Cart Items </h2>
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className={styles.cartCard}>
                      <h3>{item.title}</h3>
                      <div className={`${styles.cartBottom} d-flex justify-content-between align-items-end   `} >
                        <div className="d-flex gap-3" >
                     
                      <span className={styles.cartCount}>
                        <span onClick={() => handleQuantityChange(item.id, -1)}>
                          -
                        </span>
                        <span>{item.quantity}</span>
                        <span onClick={() => handleQuantityChange(item.id, 1)}>
                          +
                        </span>
                      </span>
                       <span className={styles.cartPrice}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      </div>
                      <div className="cursor-pointer" onClick={() => handleCartRemove(item.id)} >
                      <i class="fa-solid fa-trash"></i>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h2> Cart is empty </h2>
            )}
          </div>
          {/* Optional Cart Summary */}
          {cartItems.length > 0 && (
            <div className="col-lg-4">
              <div className={styles.cartSummary}>
                <h3>Total: ${totalPrice}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
