import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";

// Pages
// Public
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

// AdminPages
import Inventory from "./pages/AdminPages/Inventory/Inventory";

// Component
import LogoutButton from "./components/Auth0LogOutButton/Auth0LogOutButton";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";

function App() {
  const {
    isLoading,
    error,
    isAuthenticated,
    loginWithRedirect,
    user,
  } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  const namespace = "http://localhost:3000/";
  const key = `${namespace}admin`;
  const isAdmin = user[key];
  console.log('user', user);
  console.log("isAdmin", isAdmin, key);
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/pile">Not Found Test link</NavLink>
          <NavLink to="/admin/inventory">Admin page</NavLink>
          <LogoutButton>Log Out</LogoutButton>
        </header>
        <ToastProvider autoDismiss={true}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <GuardedRoute
              exact
              path="/admin/inventory"
              component={Inventory}
              auth={isAuthenticated && isAdmin}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </ToastProvider>
      </Router>
    </div>
  );
}

export default App;
