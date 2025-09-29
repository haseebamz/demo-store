import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";  
import styles from "./Ratings.module.css"

function Ratings({ rate, count }) {
  const stars = [];

  // Loop from 1 to 5 (5 stars max)
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rate >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className={styles.ratingsWrap} >
      {stars}
      <span style={{ marginLeft: "8px", color: "#333" }}>
        {rate} ({count})
      </span>
    </div>
  );
}

export default Ratings