import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import BrandCloset from '../BrandCloset/BrandCloset.jsx'
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import { ThemeProvider } from '@material-ui/core'
import './App.css';
import theme from '../../theme';
import SideNav from '../SideNav/SideNav.jsx'
import FollowPage from '../FollowPage/FollowPage';
import FollowedUserCloset from '../FollowedUserCloset/FollowedUserCloset';
import FollowedUserBrandCloset from '../FollowedUserCloset/FollowedUserBrandCloset'


function App() {
  const dispatch = useDispatch();

  let isMobile = false
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    console.log(window.innerWidth <= 800)
    // eslint-disable-next-line
  }, [])

  console.log('is mobile', isMobile)

  const userInfo = useSelector(store => store.user)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {userInfo.id && <SideNav />}
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/followedUserBrandCloset"
              component={FollowedUserBrandCloset}
            />

            <ProtectedRoute
              exact
              path="/followedUserCloset"
              component={FollowedUserCloset}
            />

            <ProtectedRoute
              exact
              path="/followPage"
              component={FollowPage}
            />

            <ProtectedRoute
              exact
              path="/closet"
              component={BrandCloset}
            />

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"
            />

            <ProtectedRoute
              exact
              path="/home"
              component={LoginPage}
              authRedirect="/user"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
