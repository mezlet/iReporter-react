import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const ContentHeader = () => {
  return (
    <Menu borderless className="homeheader-container">
      <Menu.Item>
        <Image
          src="../../../../public/images/logo.png"
          alt=""
          className="logo"
          as={Link}
          to="/"
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <NavBar />
      </Menu.Menu>
    </Menu>
  );
};

export default ContentHeader;
