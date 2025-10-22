import React, { useContext } from "react";
import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import ProductDetailsPopup from "../ProductDetailsPopup/ProductDetailsPopup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { DataContext } from "../../App";
import { handleAddToCart } from "../handleCart/handleAddToCart";
import { Link } from "react-router";

function Categories() {
  const { loading, sharedData, cartItems, setCartItems, setCartCount } = useContext(DataContext);
  // const [products, setProducts] = useState([]);
  
  const [detailsModal, showDetailsModal] = useState(false);
  const [previewItem, setPreviewItem] = useState();

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");

      
  //     setProducts(response.data);
  //     setSharedData(response.data);
  //   } catch (error) {
  //     console.error("API error", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

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

            <div className={styles.categoryWrap}>
              <div className={styles.categoryList}>
                <div className={`container ${styles.container} `}>
                  <div className={`row ${styles.row} `}>
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
                      {sharedData
                        .filter((item) => item.category === "men's clothing")
                        .slice(0, 3)
                        .map((item) => (
                          <div key={item.id} className="productCard">
                            <div className="productImg d-flex align-items-center justify-content-center ">
                              <div>
                                <img
                                  src={item.image}
                                  width={300}
                                  height={150}
                                  alt="Demo Store"
                                />
                              </div>
                              <div
                                className="cardPreviewHover"
                                onClick={() => handlePreview(item)}
                              >
                             
                                <i className="fa-solid fa-eye"></i>
                                <span>Quick Preview</span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <h3 className="m-0">

                                <Link to={`/ProductDetailsPage/${item.id}`} >
                                <span className="productName"  >
                                  {item.title}
                                </span>
                                </Link>
                                
                              </h3>
                              <span className="cartPlus" onClick={() => handleAddToCart(item, cartItems, setCartCount, setCartItems)} >+</span>
                            </div>
                            <span className="productPrice">${item.price}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryList}>
                <div className={`container ${styles.container} `}>
                  <div className={`row ${styles.row} `}>
                    <div className="col-lg-3 d-flex justify-content-center flex-column">
                      <h2>women's clothing</h2>
                      <p className={styles.categoryDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis magni dolor illo cumque quia harum aperiam
                        ullam eveniet ad eaque accusamus nam quisquam soluta
                        placeat porro qui, quis vitae? Nobis.
                      </p>
                    </div>
                    <div className={`col-lg-9 ${styles.categoryCards} `}>
                      {sharedData
                        .filter((item) => item.category === "women's clothing")
                        .slice(0, 3)
                        .map((item) => (
                          <div key={item.id} className="productCard">
                            <div className="productImg d-flex align-items-center justify-content-center ">
                              <div>
                                <img
                                  src={item.image}
                                  width={300}
                                  height={150}
                                  alt="Demo Store"
                                />
                              </div>
                              <div
                                className="cardPreviewHover"
                                onClick={() => handlePreview(item)}
                              >
                              <i className="fa-solid fa-eye"></i>
                                <span>Quick Preview</span>
                              </div>
                            </div>
                             <div className="d-flex justify-content-between align-items-center mt-3">
                              <h3 className="m-0">
                                <span className="productName">
                                  {item.title}{" "}
                                </span>
                              </h3>
                              <span className="cartPlus" onClick={() => handleAddToCart(item, cartItems, setCartCount, setCartItems)} >+</span>
                            </div>
                            <span className="productPrice">${item.price}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryList}>
                <div className={`container ${styles.container} `}>
                  <div className={`row ${styles.row} `}>
                    <div className="col-lg-3 d-flex justify-content-center flex-column">
                      <h2>Electronics</h2>
                      <p className={styles.categoryDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis magni dolor illo cumque quia harum aperiam
                        ullam eveniet ad eaque accusamus nam quisquam soluta
                        placeat porro qui, quis vitae? Nobis.
                      </p>
                    </div>
                    <div className={`col-lg-9 ${styles.categoryCards} `}>
                      {sharedData
                        .filter((item) => item.category === "electronics")
                        .slice(0, 3)
                        .map((item) => (
                          <div key={item.id} className="productCard">
                            <div className="productImg d-flex align-items-center justify-content-center ">
                              <div>
                                <img
                                  src={item.image}
                                  width={300}
                                  height={150}
                                  alt="Demo Store"
                                />
                              </div>
                              <div
                                className="cardPreviewHover"
                                onClick={() => handlePreview(item)}
                              >
                               <i className="fa-solid fa-eye"></i>
                                <span>Quick Preview</span>
                              </div>
                            </div>
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <h3 className="m-0">
                                <span className="productName">
                                  {item.title}{" "}
                                </span>
                              </h3>
                              <span className="cartPlus" onClick={() => handleAddToCart(item, cartItems, setCartCount, setCartItems)} >+</span>
                            </div>
                            <span className="productPrice">${item.price}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryList}>
                <div className={`container ${styles.container} `}>
                  <div className={`row ${styles.row} `}>
                    <div className="col-lg-3 d-flex justify-content-center flex-column">
                      <h2>Jewelery</h2>
                      <p className={styles.categoryDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis magni dolor illo cumque quia harum aperiam
                        ullam eveniet ad eaque accusamus nam quisquam soluta
                        placeat porro qui, quis vitae? Nobis.
                      </p>
                    </div>
                    <div className={`col-lg-9 ${styles.categoryCards} `}>
                      {sharedData
                        .filter((item) => item.category === "jewelery")
                        .slice(0, 3)
                        .map((item) => (
                          <div key={item.id} className="productCard">
                            <div className="productImg d-flex align-items-center justify-content-center ">
                              <div>
                                <img
                                  src={item.image}
                                  width={300}
                                  height={150}
                                  alt="Demo Store"
                                />
                              </div>
                              <div
                                className="cardPreviewHover"
                                onClick={() => handlePreview(item)}
                              >
                                <i className="fa-solid fa-eye"></i>
                                <span>Quick Preview</span>
                              </div>
                            </div>
                             <div className="d-flex justify-content-between align-items-center mt-3">
                              <h3 className="m-0">
                                <span className="productName">
                                  {item.title}{" "}
                                </span>
                              </h3>
                             <span className="cartPlus" onClick={() => handleAddToCart(item, cartItems, setCartCount, setCartItems)} >+</span>
                            </div>
                            <span className="productPrice">${item.price}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Categories;
