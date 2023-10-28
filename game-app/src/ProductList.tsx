import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // empty [] is used for render the things once.
  useEffect(() => {
    console.log("Fetching Products to", category);
    setProducts(["Clothing", "Housing"]);
  }, [category]);
  return <div>Products List</div>;
};

export default ProductList;
