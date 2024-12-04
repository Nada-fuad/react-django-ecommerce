import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";

function Product({ product }) {
  console.log("🚀 ~ Product ~ product:", product);
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${product._id}`);
  };
  return (
    <div>
      <Card
        className="my-3 p-3 rounded"
        onClick={handleProductClick}
        style={{ cursor: "pointer" }}
      >
        <Card.Img variant="top" src={product.image} alt={product.name} />

        <Card.Body>
          <Card.Title
            style={{
              transition: "color 0.3s, text-decoration 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#007bff")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              {" "}
              {product.rating} from {product.numReviews} reviews
              <Rating
                rating={product.rating}
                numReviews={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
