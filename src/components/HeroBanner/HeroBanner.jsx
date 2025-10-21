import React from 'react'
import heroImg from "/images/heroBanner.webp"
import styles from "./HeroBanner.module.css"

function HeroBanner() {
  return (
    <>
    <section className={styles.heroWrap} >
        <img  src={heroImg} alt="Banner Image" width="1408" height="736" />
    </section>
    </>
  )
}

export default HeroBanner