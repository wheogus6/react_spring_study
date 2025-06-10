import {ProductType} from "../types/ProductType";


async function getProductList(): Promise<ProductType[]> {
    const res = await fetch("/api/product/getProductList", {
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

async function getProductDetail(id: number): Promise<ProductType> {
    const res = await fetch(`/api/product/getProductDetail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error("상세 조회 실패");
    return await res.json();
}


const ProductService = {
    getProductList,
    getProductDetail
};

export default ProductService;