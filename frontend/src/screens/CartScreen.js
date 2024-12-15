import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../actions/cartAction";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import ShippingScreen from "./ShippingScreen";
function CartScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartProduct } = cart;

  const handleRemoveCartItem = (id) => {};

  useEffect(() => {
    if (id) {
      dispatch(addtoCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const handleClick = () => {
    console.log("🚀 ~ handleClick ~ handleClick:");

    navigate("/shipping");
  };
  return (
    <Row>
      <Col md={8}>
        <ListGroup variant="flush">
          {cartProduct.map((item) => (
            <>
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>

                  <Col md={3}>
                    <Form.Select
                      aria-label="Default select example"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addtoCart(item._id, e.target.value))
                      }
                    >
                      {Array.from(
                        { length: item.countInStock },
                        (_, index) => index + 1
                      ).map((index) => (
                        <option key={index} value={index}>
                          {index}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => handleRemoveCartItem(item._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </>
          ))}
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>ll</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button type="button" variant="primary" onClick={handleClick}>
                  zum kasse
                </Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
export default CartScreen;
