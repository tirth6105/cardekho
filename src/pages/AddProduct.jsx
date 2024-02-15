import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, get } from "../redux/Action";
import { Link } from "react-router-dom";
import { Store } from "../redux/Store";

const AddProduct = () => {
  let [title, setTitle] = useState();
  let [img, setImg] = useState();
  let dispatch = useDispatch();
  console.log(product);

  const handleproduct = async (e) => {
    e.preventDefault();
    let newproduct = {
      title: title,
      img: img,
    };
    dispatch(addproduct(newproduct));
  };

  useEffect(() => {
    dispatch(get());
  });

  // console.log(selector.Products);

  return (
    <div>
      <form onSubmit={handleproduct}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input type="submit" />
      </form>
      <hr />

      {/* {selector.Products.map((ele) => {
        return (
          <>
            <Link >
              <div className="col-4 row">
                <h1>{ele.title}</h1>
              </div>
            </Link>
          </>
        );
      })} */}
      {

      }
    </div>
  );
};

export default AddProduct;
