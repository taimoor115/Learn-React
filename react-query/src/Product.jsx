import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
const fetchProducts = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

const useProductsById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProducts(id),
    staleTime: 10000,
  });
};
const Product = () => {
  const { productId: id } = useParams();
  console.log(id);
  const { data: product, isLoading } = useProductsById(id);

  console.log(product);
  if (isLoading) {
    return <div>Loading......</div>;
  }
  return <div>{product.title}</div>;
};

export default Product;
