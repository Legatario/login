import React from "react";

const Button = ({Text, onClick, Type="button"}) =>{
    return (
        <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded custom-button"
        type={Type}
        onClick={onClick}
        >{Text}
        </button>
    )
}

export default Button