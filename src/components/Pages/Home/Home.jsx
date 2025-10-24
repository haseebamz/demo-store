import React, { useContext } from "react";
import Categories from "../../category/categories";
import Featured from "../../featured/Featured";
import HeroBanner from "../../HeroBanner/HeroBanner";
import { DataContext } from "../../../App";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

function Home() {

  const { loading } = useContext(DataContext);

  return (
    <>
      {loading ? <LoadingSpinner /> : (
        <>
          <HeroBanner />
          <Categories />
          <Featured />
        </>
      )}

    </>
  );
}

export default Home;
