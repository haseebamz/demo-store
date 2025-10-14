import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const handleAddToCart = async (product, cartItems, setCartCount, setCartItems) => {

  const payLoad = { userId: 1, products: [{ id: product.id }] };

  try {
    const response = await axios.post(
      "https://fakestoreapi.com/carts",
      payLoad
    );
    console.log("API response", response);



    
    // Check if product is already in cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    let updatedCart;
    if (existingItem) {
      // increase quantity
      updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // add new product with quantity 1
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);


    setCartCount(updatedCart.length);

    // console.log("Cart Update",updatedCart)
    toast.success("Product added in cart");
  } catch (error) {
    console.error("API error", error);
      toast.error("Failed to add item.");
  } 
};
