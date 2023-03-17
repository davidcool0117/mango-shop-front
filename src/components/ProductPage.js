import './ProductPage.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {API_URL} from "../config/constants";
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        let url = `${API_URL}products/${id}`;
        axios
            .get(url)
            .then((result) => {
                const product = result.data.product
                console.log(product);
                setProduct(product);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    if (product == null) {
        return <h2>상품정보를 받고 있습니다...</h2>
    }


    return (
        <div>
            <h1 className="center">상품상세페이지</h1>
            <div id="image-box">
                <img src={`/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt={product.seller} />
                <span className="product-seller">{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createdAt">등록날짜: {dayjs(product.createdAt).format('YYYY-MM-DD')}</div>
                <div id="description">{product.description}</div>
            </div>
            <div id="btn">
                <button onClick={() => navigate(-1)} id="back-btn">뒤로가기</button>
                <button onClick={() => navigate("/")} id="home-btn">홈으로</button>
            </div>
        </div>
    )
}

export default ProductPage;