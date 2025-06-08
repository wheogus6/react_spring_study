import React, {useState} from "react";

function Input2() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value,
        });
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" value={name} id="name" onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" value={email} id="email" onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" value={tel} id="tel" onChange={onChange}/>
            </div>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>
    )
}

export default Input2;