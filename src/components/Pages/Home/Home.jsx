import React from "react";
import Categories from "../../category/categories";
import Featured from "../../featured/Featured";
import HeroBanner from "../../HeroBanner/HeroBanner";

function Home() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <Featured />
    </>
  );
}

export default Home;
