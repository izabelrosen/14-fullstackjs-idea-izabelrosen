import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// accept the component and everything that is passed in
// if not authenticated: redirect to signin
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, isFetching },
  ...rest
}) => (
    <Route
    { ...rest } render={props => (!isAuthenticated && !isFetching ? (
      <Redirect to='/signin' />) : (<Component { ...props } />))} />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
