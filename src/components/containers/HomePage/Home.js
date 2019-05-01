import React from "react";
import withContentHeader from "../../../hoc/withContentHeader";
import HomeBanner from "../../presentation/HomeBanner/HomeBanner";
import Footer from "../../presentation/Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <HomeBanner />
      <Footer />
    </div>
  );
};

export default withContentHeader(Home);
