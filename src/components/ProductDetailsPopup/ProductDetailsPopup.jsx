import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ProductDetailsPopup.module.css";
import Ratings from "../RatingStars/Ratings";

function ProductDetailsPopup({ onClose, product }) {
  const [cartQuantity, setCartQuantity] = useState(1);

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
              {/* <p>{product.description}</p> */}
              <div className="addToCartBox">
                <span onClick={() => setCartQuantity((num) => num - 1)}  >-</span>
                <span>{cartQuantity}</span>
                <span onClick={() => setCartQuantity((num) => num + 1)} >+</span>
              </div>
              <Ratings
                rate={product.rating.rate}
                count={product.rating.count}
              />
              <span className={styles.productPrice}>$ {product.price}</span>
            </div>
          </div>
        </div>
        <button className="closeModal" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPopup;
