import React, { useEffect, useState } from 'react';

type TestData = {
    text: string;
    number: number;
};

function Test() {

    const [data, setData] = useState<TestData | null>(null);

    useEffect(() => {
        fetch("/front/user/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.log("error : ", err));
    }, []);

    if (!data) return <div>로딩중...</div>;

    return (
        <div>
            <h1>test 결과1</h1>
            <p>{data.text}</p>
            <p>{data.number}</p>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        </div>
    );
}

export default Test;