import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductDetailsPopup.module.css";
import Ratings from "../RatingStars/Ratings";
import { handleAddToCart } from "../handleCart/handleAddToCart";
import { DataContext } from "../../App";

function ProductDetailsPopup({ onClose, product }) {

  const {cartItems, setCartCount, setCartItems} = useContext(DataContext)



  return (
    <div className={styles.detailsPopup}>
      <div className={`modal-overlay `}>
        <div className={`modal-box ${styles.modalBox} `}>
          <div className="row">
            <div className="col-5">
              <div className={styles.imgWrap}>
                <img src={product.image} alt="" width={400} height={300} />
              </div>
            </div>
            <div className="col-6">
              <h2>{product.title}</h2>

              <Ratings
                rate={product.rating.rate}
                count={product.rating.count}
              />
            
              <span className={styles.productPrice}>${product.price}</span>
              <button className="CustomBtn" onClick={() => handleAddToCart(product, cartItems, setCartCount, setCartItems ) } >ADD TO CART</button>
            </div>
          </div>
          <button className="closeModal" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPopup;
