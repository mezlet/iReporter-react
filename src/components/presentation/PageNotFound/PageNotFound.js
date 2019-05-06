import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';

function Footer() {
  return (
    <Responsive>
      <div className="pageWrapper">
        <p>PAGE NOT FOUND</p>
        <h4>
          <Link to="/">Redirect to home page</Link>
        </h4>
      </div>
    </Responsive>
  );
}

export default Footer;
