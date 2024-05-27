import React from "react";

const Input = ({type, placeholder, value, onChange}) =>{
    return (
        <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        >           
        </input>
    )
}

export default Input