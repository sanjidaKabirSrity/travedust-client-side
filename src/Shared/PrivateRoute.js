import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../Hooks/useFirebase'

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useFirebase();

    if (isLoading) {
        return (
        <div className="text-center py-5">
            <div class="spinner-border text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        );
    }

    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;