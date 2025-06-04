import React, {useState} from "react";

function Input() {
    const [txtValue, setTextVal] = useState('');

    function onChange(e) {
        setTextVal(e.target.value);
    }

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br/>
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;