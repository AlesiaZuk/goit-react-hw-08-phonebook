import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
