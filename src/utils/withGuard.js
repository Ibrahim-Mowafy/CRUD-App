import React from 'react';
import { useSelector } from 'react-redux';

const withGuards = (Component) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <div>Please login first</div>
    );
  };
  return Wrapper;
};

export default withGuards;
