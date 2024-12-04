import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center bg-primary py-4">Footer</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
