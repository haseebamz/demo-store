import React, { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import { DataContext } from "../../App";
import ProductDetailsPopup from "../ProductDetailsPopup/ProductDetailsPopup";
import styles from "./Featured.module.css"
import { handleAddToCart } from "../handleCart/handleAddToCart";
import { Link } from "react-router";

function Featured() {
  const { sharedData, cartItems, setCartCount, setCartItems } = useContext(DataContext);
  const [detailsModal, showDetailsModal] = useState(false);
  const [previewItem, setPreviewItem] = useState();




  const handlePreview = (item) => {
    showDetailsModal(true);
    setPreviewItem(item);
  };





  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // arrows: false,
          // slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
    ],
  };




  return (
    <>
      {detailsModal && (
        <ProductDetailsPopup
          product={previewItem}
          onClose={() => showDetailsModal(false)}
        />
      )}

      <section className={` my-5 featuredWrap ${styles.featuredWrap}`} >
        <div className="container">
          <h2 className="text-center mb-5" >Featured Products</h2>
          <Slider {...settings}>
            {sharedData?.map((item) => (
              <div key={item.id} className="productCard my-3">
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
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Featured;
