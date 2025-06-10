import React, {useEffect, useState} from "react";
import "../assets/css/ProductList.css";
import {ProductType} from "../types/ProductType";
import { useNavigate } from 'react-router-dom';
import ProductService from "../services/ProductService";


const ProductList = () => {

    const [productList, setData] = useState<ProductType[]>([]);

    console.log(productList)

    useEffect(() => {
        ProductService.getProductList()
            .then(setData)
            .catch((err) => console.log("error : ", err));
    }, []);


    return (
        <div className="product-list-wrapper">
            <h1>상품 목록</h1>
            <div className="product-list">
                {productList.map(product => <Product key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

interface ProductProps {
    product: ProductType;
}

function Product({ product }: ProductProps) {

    const navigate = useNavigate();
    const goProductDetail = () => {
        navigate(`/front/productDetail/${product.id}`)
    };

    return (
        <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p className="price">{product.price.toLocaleString()}원</p>
            <button onClick={goProductDetail}>상세보기</button>
        </div>
    );
}


export default ProductList;
