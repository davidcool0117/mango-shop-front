import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./MainPage.css";
import { API_URL } from "../config/constants";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/products`;
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(products);
      });
  }, []);
  return (
    <div>
      <div id="body">
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                {/* 맵함수를 사용할때는 key값이 존재해야 한다. 아니면 문법 오류가 남. */}
                <Link className="product-link" to={`/ProductsPage/${product.id}`}>
                  <div>
                    <img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt={product.imageUrl} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-footer">
                      <div className="product-seller">
                        <img src="./images/images/icons/avatar.png" alt="product-avatar" className="product-avatar" />
                        <span>{product.seller}</span>
                      </div>
                      <span className="product-date">{dayjs(product.createdAt).format("YYYY/MM/DD")}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
