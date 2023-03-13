import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let url = "https://e20fed74-baa5-45c0-8f03-17b0b3272edd.mock.pstmn.io/products/";
        axios
            .get(url)
            .then((result) => {
                const products = result.data.products;
                setProducts(products);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <div id="body">
                <div id="banner"><img src="images/banners/banner1.png" alt="" /></div>
                <h1>Products</h1>
                <div id="product-list">
                    {products.map((product, idx) => {
                        return (
                            <div className="product-card" key={idx}>
                                <Link className="product-link" to={`/ProductPage/${product.id}`}>
                                    <div><img className="product-img" src={product.imageUrl} alt="product-img" /></div>
                                    <div className="product-content">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <span className="product-seller">
                                            <img src="images/icons/avatar.png" alt="product-seller" className="product-avatar" />
                                            <span>{product.seller}</span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainPage;