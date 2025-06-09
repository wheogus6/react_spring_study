import {ProductType} from "../types/ProductType";

const ProductService = {
    async getProductList(): Promise<ProductType[]> {
        const res = await fetch("/front/product/getProductList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("네트워크 응답 오류");
        }
        const data: ProductType[] = await res.json();
        return data;
    }
}

export default ProductService;