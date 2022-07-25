import React from "react";

const TextInput = ({placeholder, getValueFunc}) => {
    return (
        <input className="text-input" type="text" placeholder={placeholder} onChange={(e) => {getValueFunc(e.target.value)}}/>
    );
}

export default TextInput;