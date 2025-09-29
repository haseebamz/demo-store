import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categories.module.css";
import ProductDetailsPopup from "../ProductDetailsPopup/ProductDetailsPopup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Categories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailsModal, showDetailsModal] = useState(false);
  const [previewItem, setPreviewItem] = useState();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("API response", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("API error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePreview = (item) => {
    showDetailsModal(true);
    setPreviewItem(item);
  };

  return (
    <>
      <div>
        {loading ? (
        <LoadingSpinner />
        ) : (
          <div>
            {detailsModal && (
              <ProductDetailsPopup
                product={previewItem}
                onClose={() => showDetailsModal(false)}
              />
            )}

            <div className="categoryWrap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 d-flex justify-content-center flex-column">
                    <h2>Men's Clothing</h2>
                    <p className={styles.categoryDescription}>
                      combines style, comfort, and functionality. From casual
                      wear like t-shirts and jeans to formal suits and office
                      attire, men’s fashion offers versatile options for every
                      occasion.
                    </p>
                  </div>
                  <div className={`col-lg-9 ${styles.categoryCards} `}>
                    {products.slice(0, 3).map(
                      (item) =>
                        item.category === "men's clothing" && (
                          <div key={item.id} className="productCard">
                            <div className="productImg d-flex align-items-center justify-content-center ">
                              <div>
                                <img
                                  src={item.image}
                                  width={300}
                                  height={150}
                                  alt="Fake store"
                                />
                              </div>
                              <div
                                className="cardPreviewHover"
                                onClick={() => handlePreview(item)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"></path>
                                </svg>
                                <span>Quick Preview</span>
                              </div>
                            </div>
                            <h3>
                              <span className="productName">
                                {" "}
                                {item.title}{" "}
                              </span>
                            </h3>
                            <span className="productPrice">$ {item.price}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>

                <h2>Electronics</h2>
                <ul>
                  {products.map(
                    (item) =>
                      item.category === "electronics" && (
                        <li key={item.id}>
                          {" "}
                          {item.title} {item.category}{" "}
                        </li>
                      )
                  )}
                </ul>
                <h2>Jewelery</h2>
                <ul>
                  {products.map(
                    (item) =>
                      item.category === "jewelery" && (
                        <li key={item.id}>
                          {" "}
                          {item.title} {item.category}{" "}
                        </li>
                      )
                  )}
                </ul>
                <h2>Women's Clothing</h2>
                <ul>
                  {products.map(
                    (item) =>
                      item.category === "women's clothing" && (
                        <li key={item.id}>
                          {" "}
                          {item.title} {item.category}{" "}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Categories;
