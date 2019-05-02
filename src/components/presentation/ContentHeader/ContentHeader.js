import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { logoutUser } from '../../../redux/actions/auth/auth-dispatchers';

const logo =
  'https://res.cloudinary.com/do01bfhpw/image/upload/v1556721799/logo.png';
const ContentHeader = props => {
  const { isLoggedIn, logout } = props;
  return (
    <Menu borderless className="homeheader-container">
      <Menu.Item>
        <Image src={logo} alt="" className="logo" as={Link} to="/" />
      </Menu.Item>
      {isLoggedIn ? (
        <Menu.Menu position="right">
          <NavBar logout={logout} />
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
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
        </Menu.Menu>
      )}
    </Menu>
  );
};
const mapStateToProps = state => ({ isLoggedIn: state.auth.isLoggedIn });
const mapDispatchToProps = { logout: logoutUser };
const connectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentHeader);
export default connectedHeader;
