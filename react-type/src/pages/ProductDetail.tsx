import React from "react";
import "../assets/css/ProductDetail.css";

const product = {
    id: 1,
    name: "상품 1",
    price: 29000,
    description: "이 상품은 정말 좋아요! 고퀄리티 소재를 사용했습니다.",
    img: "https://via.placeholder.com/500",
};

const ProductDetail = () => {
    return (
        <div className="product-detail-wrapper">
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <p className="description">{product.description}</p>
            <p className="price">{product.price.toLocaleString()}원</p>
            <button>장바구니 담기</button>
        </div>
    );
};

export default ProductDetail;
