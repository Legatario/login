import React from "react";

const Input = ({type, placeholder, value, onChange}) =>{
    return (
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline custom-input"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        >           
        </input>
    )
}

export default Input