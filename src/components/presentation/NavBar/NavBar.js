import React from "react";
import { Link } from "react-router-dom";
import { Icon, Dropdown } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Icon name="plus" />
            <Link to="/create" className="nav-link">
              New Report
            </Link>
          </li>
          <li>
            <Icon name="book" />
            <Link to="/record" className="nav-link">
              my Record
            </Link>
          </li>
          <li>
            <Icon name="user" />
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li>
            <Icon name="file" />
            <Dropdown text="View Records">
              <Dropdown.Menu>
                <Dropdown.Header content="Select Record" />
                <Dropdown.Divider />
                <Dropdown.Item text="All Records" as={Link} to="/viewAll" />
                <Dropdown.Item text="Red-flags" as={Link} to="/viewRed-flag" />
                <Dropdown.Item
                  text="Interventions"
                  as={Link}
                  to="/viewIntervention"
                />
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Icon name="sign-out" />
            Sign out
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
