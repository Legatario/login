import React from "react";

const CustomBtn = ({Text, onClick, Type="button"}) =>{
    return (
        <button
        class="bg-blue-500 borde text-white py-2 px-3 font-bold text-base mt-5 rounded-md cursor-pointer outline-none transition-all duration-400 ease-out justify-center"
        type={Type}
        onClick={onClick}
        >{Text}
        </button>
    )
}

export default CustomBtn 