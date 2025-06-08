import React, {useState} from "react";

function Counter() {
    const [num, setNum] = useState(0);

    function increase() {
        if (num < 5) {
            setNum(num + 1);
        }
    };

    function decrease() {
        if (num >= 1) {
            setNum(num - 1);
        }
    };


    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;