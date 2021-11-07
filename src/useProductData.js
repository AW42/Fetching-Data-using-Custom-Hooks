import React, { useState, useEffect } from "react";

const useProductData = (url) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((obj) => {
        setTitle(obj.title);
        setPrice(obj.price);
        setImage(obj.image);
      })
      .catch((error) => console.log("bhand " + error));
  }, []);

  return { title, price, image };
};

export default useProductData;
