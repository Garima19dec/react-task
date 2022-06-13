import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductContent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, name, email, body } = product;
    return (
      <div className="four wide column" key={id}>
        <Link >
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">{email}</div>
                <div className="meta">{body}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductContent;
