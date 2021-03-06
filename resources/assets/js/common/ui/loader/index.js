import React from "react";
import PropTypes from "prop-types";

const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

LoadingComponent.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default LoadingComponent;
