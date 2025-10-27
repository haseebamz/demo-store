import React from "react";
import styles from "./OrderSummary.module.css";

function OrderSummary({ totalPrice }) {
  return (
    <>
      <div className={` col-md-4  ${styles.orderSummaryWrap}`}>
        <div className={styles.orderSummaryInside}>
          <div>
          <h2>Order Summary</h2>

          <div className={styles.summaryLine}>
            <span>Order Total</span>
            <strong>${totalPrice}</strong>
          </div>
          <div className={styles.summaryLine}>
            <span>Net Total</span>
            <strong>${totalPrice}</strong>
          </div>
          <div className="text-center my-5 ">
            <button className="CustomBtn">CHECKOUT</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
