import React, { useEffect, useState } from "react";
import { LoginService } from "../services/loginService";
import { LoginRequest } from "../services/interfaces/LoginRequest";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/actions/auth.action";
import { Row, Button, Form, Col } from "react-bootstrap";
import { useHistory, useLocation, Link } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("string");
  const [password, setPassword] = useState("string");

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { from } = (location.state as any) || { from: { pathname: "/" } };

  const onLoginClicked = async () => {
    try {
      const body: LoginRequest = {
        username,
        password,
      };

      const result = await LoginService.login(body);

      if (result && result.token) {
        localStorage.setItem("@token", result.token);
        dispatch(setProfile(result));
        history.replace(from);
      } else {
        throw Error();
      }
    } catch (err) {
      console.log("Login failed", err);
    }
  };

  const onEmailChange = (e: any) => {
    setUsername(e.currentTarget.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div className="mt-5">
      <Form>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={onEmailChange}
                value={username}
                type="text"
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onChange={onPasswordChange}
                value={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <Button onClick={onLoginClicked} variant="primary" type="button">
                Submit
              </Button>
              <Link to="/register">Register</Link>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
