import React, { useEffect, useState } from "react";
import { RegisterService } from "../services/registerService";
import { RegisterRequest } from "../services/interfaces/RegisterRequest";
import { useDispatch } from "react-redux";
import { setProfile, register } from "../redux/actions/auth.action";
import { Row, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onRegisterClicked = async () => {
    try {
      const body: RegisterRequest = {
        username,
        password,
      };

      dispatch(register(body));
    } catch (err) {
      console.log("Register failed", err);
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
                type="text"
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onChange={onPasswordChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <Button
                onClick={onRegisterClicked}
                variant="primary"
                type="button"
              >
                Submit
              </Button>
              <Link to="/login">Login</Link>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
