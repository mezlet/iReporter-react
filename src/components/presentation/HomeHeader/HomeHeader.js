import React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
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
        <Menu.Item>
          <Button className="signup" as={Link} to="/signup">
            Sign Up
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button className="login" as={Link} to="/login">
            Login
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default HomeHeader;
