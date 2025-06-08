import { TestData } from "../types/TestData";

export async function fetchTestData(): Promise<TestData> {
    const res = await fetch("/front/user/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("네트워크 응답 오류");
    }

    const data = await res.json();
    return data;
}