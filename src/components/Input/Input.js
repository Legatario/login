import React from "react";

const Input = ({type, placeholder, value, onChange}) =>{
    return (
        <input
        className="w-full px-5 py-5 inline-block border-0 border-b-2 border-black bg-transparent outline-none min-w-180 text-base transition-all duration-300 ease-out rounded-none text-black placeholder-black"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        >           
        </input>
    )
}

export default Input