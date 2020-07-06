import React from "react";
import "./App.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Register } from "./pages/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/public">{/* <PublicPage /> */}</Route>
            <Route path="/login">
              <Container className="p-3">
                <Jumbotron>
                  <h1 className="header">
                    Havbruksloggen Coding Challenge Web UI | Login
                  </h1>
                  <Login />
                </Jumbotron>
              </Container>
            </Route>
            <Route path="/register">
              <Container className="p-3">
                <Jumbotron>
                  <h1 className="header">
                    Havbruksloggen Coding Challenge Web UI | Register
                  </h1>
                  <Register />
                </Jumbotron>
              </Container>
            </Route>
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
