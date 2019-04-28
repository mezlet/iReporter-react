import React, { Fragment } from "react";
import ContentHeader from "../components/presentation/ContentHeader/ContentHeader";

const withContentHeader = WrappedComponent => {
  // eslint-disable-next-line react/prefer-stateless-function
  return class EnhancedComponent extends React.Component {
    render() {
      return (
        <Fragment>
          <ContentHeader />
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withContentHeader;
