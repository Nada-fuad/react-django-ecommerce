import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../actions/userAction";
import LoginScreen from "./LoginScreen";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [message, setMessage] = useState("");
  const userDetail = useSelector((state) => state.userDetail);
  const { loading, error, user } = userDetail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      navigate(LoginScreen);
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, dispatch, user, navigate, success]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (password != conpassword) {
      setMessage("password do not match");
    } else {
      dispatch(
        updateUserDetails({
          id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
      );
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>

        <Form onSubmit={handleUpdateProfile}>
          <Form.Group controlId="name">
            <Form.Label>Deine Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>dein Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="conpassword">
            <Form.Label>nochmal dein Password</Form.Label>
            <Form.Control
              type="conpassword"
              value={conpassword}
              onChange={(e) => setConPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>my Orders</h2>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
