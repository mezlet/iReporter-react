import React from "react";
import { Image } from "semantic-ui-react";

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      <Image src="../../../../public/images/landing.png" className="landing" />

      <h3 className="tip1">Let's Make a Better Nation</h3>
      <p className="tip2">
        iReport is a platform provided to bring any form of corruption or
        situations that requires government intervention to the notice of
        appropriate authorities
      </p>
      <p className="tip3">
        Simply{" "}
        <strong>
          <a href="UI/pages/user/signup.html">Sign Up</a>
        </strong>{" "}
        to get started
      </p>
    </div>
  );
};

export default HomeBanner;
