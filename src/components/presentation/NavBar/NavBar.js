import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Dropdown, Responsive } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <Responsive minWidth={Responsive.onlyTablet.minWidth + 1}>
          <ul>
            <li>
              <Link to="/create" className="nav-link">
                <Icon name="plus" />
                New Report
              </Link>
            </li>
            <li>
              <Link to="/record" className="nav-link">
                <Icon name="book" />
                my Record
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">
                <Icon name="user" />
                Profile
              </Link>
            </li>
            <li>
              <Icon name="file" />
              <Dropdown text="View Records">
                <Dropdown.Menu>
                  <Dropdown.Header content="Select Record" />
                  <Dropdown.Divider />
                  <Dropdown.Item text="All Records" as={Link} to="/view-all" />
                  <Dropdown.Item
                    text="Red-flags"
                    as={Link}
                    to="/view-red-flags"
                  />
                  <Dropdown.Item
                    text="Interventions"
                    as={Link}
                    to="/view-interventions"
                  />
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Link to="/logout" className="nav-link">
                <Icon name="sign-out" />
                Sign out
              </Link>
            </li>
          </ul>
        </Responsive>
        <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
          <Dropdown icon="bars" className="Hamburger">
            <Dropdown.Menu>
              <Dropdown.Item text="New Report" as={Link} to="/create" />
              <Dropdown.Item text="My Record" as={Link} to="/record" />
              <Dropdown.Item text="Profile" as={Link} to="/profile" />
              <Dropdown.Item text="All Records" as={Link} to="/view-all" />
              <Dropdown.Item text="Red-flags" as={Link} to="/view-red-flags" />
              <Dropdown.Item
                text="Interventions"
                as={Link}
                to="/view-interventions"
              />
              <Dropdown.Item text="Sign out" as={Link} to="/logout" />
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </nav>
    </div>
  );
};

export default NavBar;
