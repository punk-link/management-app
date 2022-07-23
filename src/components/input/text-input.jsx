import React, { useState } from "react";

const TextInput = ({placeholder}) => {
    let [text, setText] = useState("");

    let onChange = (e) => {
        setText(e.target.value);

    }

    return (
        <input className="text-input" type="text" placeholder={placeholder} onChange={onChange}/>
    );
}

export default TextInput;