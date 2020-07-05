import React from "react";
import "./App.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Container className="p-3">
          <Jumbotron>
            <h1 className="header">Havbruksloggen Coding Challenge Web UI</h1>
          </Jumbotron>
        </Container>
      </div>
    </Provider>
  );
};

export default App;
