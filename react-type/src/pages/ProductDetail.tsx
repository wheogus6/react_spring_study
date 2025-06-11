import React from "react";
import "../assets/css/ProductDetail.css";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { ProductType } from "../types/ProductType";
import ProductService from "../services/ProductService";

const ProductDetail = () => {

    const { id } = useParams<{ id : string}>();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        if (id) {
            ProductService.getProductDetail(id)
                .then(setProduct)
                .catch((err) => console.error("상세 정보 오류:", err));
        }
    }, [id]);

    if (!product) {
        return <p>상품 정보를 불러오는 중입니다...</p>;
    }

    return (
        <div className="product-detail-wrapper">
            <img src={product.imgUrl} alt={product.productName} />
            <h1>{product.productName}</h1>
            <p className="description">상품설명</p>
            <p className="price">{product.price.toLocaleString()}원</p>
            <button>장바구니 담기</button>
        </div>
    );
};

export default ProductDetail;
