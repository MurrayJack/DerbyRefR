import React from "react";

import Auth from './Auth';

const auth = new Auth();

function withAuth(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {
        return <WrappedComponent auth={auth} {...this.props} />;
      }
    };
  }

  export default withAuth