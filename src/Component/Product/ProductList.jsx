import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          details={item.details}
        ></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
