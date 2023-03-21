import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../config/constants.js";

import axios from "axios";
import "./ProductPage.css";
import { Button, message } from 'antd';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ProductPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	let url = `${API_URL}/products/${id}`;
	const getProduct = () => {
		axios
			.get(url)
			.then((result) => {
				console.log(result.data.product);
				setProduct(result.data.product);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getProduct();
	}, []);

	if (product == null) {
		return <h1>상품정보를 받고 있습니다...</h1>;
	}

	const onClickPurchase = () => {
		axios
			.post(`${API_URL}/purchase/${id}`)
			.then((result) => {
				console.log(result);
				message.info("결제가 완료되었습니다!")
				navigate('/', { replace: true });
				getProduct();
			})
			.catch((error) => {
				console.log(error);
				message.error(`에러발생 ${error.message}`)
			});
	}
	return (
		<div>
			<button
				onClick={() => {
					navigate(-1);
				}}
				id="back-btn">
				뒤로
			</button>
			<div id="image-box">
				<img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
			</div>
			<div id="profile-box">
				<img src="/images/icons/avatar.png" alt={product.seller} />
				<span className="product-seller">{product.seller}</span>
			</div>
			<div className="content-box">
				<div id="name">{product.name}</div>
				<div id="price">{product.price}</div>
				<div id="createdAt">상품등록일: {dayjs(product.createdAt).format("YY년MM월DD일-hh시MM분ss초")}</div>
				<Button size="large" type="primary" danger={true} className="purchase" onClick={onClickPurchase} disabled={product.soldout === 1}>즉시결제하기</Button>
				<pre id="description">{product.description}</pre>
			</div>
		</div>
	);
};
export default ProductPage;
