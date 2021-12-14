import { RouteProps, Redirect, Route } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
}

export function PrivateRoute({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: PrivateRouteProps) {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }
  return <Redirect to="/" />

}