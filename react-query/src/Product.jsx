import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const fetchProducts = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

const putData = async (id, newData) => {
  return axios.put(`https://dummyjson.com/products/${id}`, newData);
};

const usePutData = () => {
  return useMutation({
    mutationFn: (id, newData) => putData(id, newData),
  });
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

  const { mutateAsync: putDataOnServer } = usePutData();
  console.log(product);
  if (isLoading) {
    return <div>Loading......</div>;
  }
  return (
    <div>
      {product.title}

      <div>
        <button onClick={() => putDataOnServer(id, { title: "Lotions" })}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Product;
