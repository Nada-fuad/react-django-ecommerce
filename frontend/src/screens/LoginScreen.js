import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginDate } from "../actions/userAction";
import Message from "../components/Message";
import Loader from "../components/Loader";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const queryString = navigate.search;
  const redirect = queryString ? queryString.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, dispatch, redirect]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLoginDate(email, password));
  };

  return (
    <FormContainer>
      {error && <Message className="danger">{error}</Message>}
      {loading && <Loader />}
      <h1>Anmeldung</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="passwort">
          <Form.Label>Passwort</Form.Label>
          <Form.Control
            type="passwort"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="my-3" type="submit" variant="primary">
          Anmelden
        </Button>
      </Form>

      <Row>
        <Col>
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Neu bei uns? Jetzt registrieren
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
