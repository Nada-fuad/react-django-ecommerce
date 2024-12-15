import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [message, setMessage] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const navigate = useNavigate();
  const queryString = navigate.search;
  const redirect = queryString ? queryString.split("=")[1] : "/";

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, dispatch, redirect]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password != conpassword) {
      setMessage("pass not match");
      return;
    }
    console.log({ name, email, password }); // Überprüfe die gesendeten Daten

    dispatch(register(name, email, password));
  };
  return (
    <FormContainer>
      <h2>Registrieren</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="name">
          <Form.Label>Deine Name</Form.Label>
          <Form.Control
            required
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>dein Password</Form.Label>
          <Form.Control
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="conpassword">
          <Form.Label>nochmal dein Password</Form.Label>
          <Form.Control
            required
            type="conpassword"
            value={conpassword}
            onChange={(e) => setConPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Registrieren
        </Button>
      </Form>

      <Row>
        Hast du schon Account?
        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
          Login
        </Link>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;
