import React, { Fragment } from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux/actions/auth/auth-dispatchers";
import ContentHeader from "../ContentHeader/ContentHeader";

const HomeHeader = props => {
  const { isLoggedIn, logout } = props;

  if (isLoggedIn) {
    return <ContentHeader />;
  }
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
        {isLoggedIn ? (
          <Menu.Item>
            <Button className="login" onClick={() => logout()}>
              Logout
            </Button>
          </Menu.Item>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </Menu.Menu>
    </Menu>
  );
};
const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn });
const mapDispatchToProps = { logout: logoutUser };
const connectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHeader);
export default connectedHeader;
