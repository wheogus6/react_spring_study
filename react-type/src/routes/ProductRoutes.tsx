import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProductRoutes: RouteObject[] = [
    { path: "/", element: <Navigate to="/front/productList" replace /> },
    { path: "/front/productList", element: <ProductList /> },
    { path: "/front/productDetail/:id", element: <ProductDetail /> },
];

export default ProductRoutes;