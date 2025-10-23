import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import Ratings from "../../RatingStars/Ratings";
import styles from "./ProductDetailsPage.module.css";
import { DataContext } from "../../../App";
import { handleAddToCart } from "../../handleCart/handleAddToCart";
import Featured from "../../featured/Featured";

function ProductDetailsPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { cartItems, setCartCount, setCartItems } = useContext(DataContext)

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/products/${id}`
        );
        // console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <section className={styles.productDetailsWrap}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="container" >
              {/* <h1>ProductDetailsPage</h1> */}

              <div className="row">
                <div className="col-md-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    width={640}
                    height={843}
                  />
                </div>
                <div className="col-md-7 ps-md-5">
                  <h2>{product.title}</h2>
                  <span><strong>Category:</strong> {product.category}</span>
                  <div className="my-3" >
                    <Ratings
                      rate={product.rating.rate}
                      count={product.rating.count}
                    />
                  </div>
                  <p>{product.description}</p>
                  <span className={styles.productPrice}>${product.price}</span>
                  <button className="CustomBtn" onClick={() => handleAddToCart(product, cartItems, setCartCount, setCartItems)} >ADD TO CART</button>
                </div>
              </div>

            </div>
            <Featured />
          </>
        )}
      </section>
    </div>
  );
}

export default ProductDetailsPage;
