import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);

  let fetchApi = async () => {
    let result = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    return result;
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      {products.map((element) => (
        <div key={element.id}>{element.title}</div>
      ))}
    </div>
  );
}

export default Home;
