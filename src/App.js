import { useEffect, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { refresh } from './redux/auth/auth-operations';
import { getIsRefreshing } from './redux/auth/auth-selectors';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AppBar from './components/AppBar/AppBar';

const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const PhonebookView = lazy(() => import('./views/PhonebookView/PhonebookView'));

const sectionClass = ['section'];

function App() {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <section className={sectionClass}>
      {!isRefreshing && (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>...</p>}>
              <Redirect exact from="/" to="/login" />
              <PublicRoute exact path="/login" redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
              <PublicRoute exact path="/register" redirectTo="/contacts">
                <RegisterView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <PhonebookView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </section>
  );
}

export default App;

/* <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/contacts" /> : <LoginView />}
          </Route>

          <Route exact path="/register">
            {isLoggedIn ? <Redirect to="/contacts" /> : <RegisterView />}
          </Route>

          <Route path="/contacts">
            {!isLoggedIn ? <Redirect to="/login" /> : <PhonebookView />}
          </Route> */
