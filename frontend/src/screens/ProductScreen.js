import React, { useEffect, useState } from "react";
import products from "../products";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { productDetail } from "../actions/productsAction";

function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productD = useSelector((state) => state.productD);
  const { product } = productD;

  useEffect(() => {
    dispatch(productDetail(id));
  }, [dispatch]);
  // const product = products.find((item) => item._id === id);

  return (
    <div>
      <Link to="/">
        <h2 className="btn btn-primary my-3">Zurück</h2>
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={`${product.numReviews} Reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock}</Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        {Array.from(
                          { length: product.countInStock },
                          (_, index) => index + 1
                        ).map((index) => (
                          <option key={index} value={index}>
                            {index}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock == 0}
                >
                  Weiter
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
