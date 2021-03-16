import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
      <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/pile">Not Found Test link</NavLink>
    </header>
        <ToastProvider autoDismiss={true}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ToastProvider>
      </Router>
    </div>
  );
}

export default App;
