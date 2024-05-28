import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CustomBtn from "../../components/Button/CustomBtn";

const Home = () =>{

    const { exit } = useAuth();
    const navigate = useNavigate();

    return(
        <div>
            <h2>Home</h2>
            <div>
                <CustomBtn 
                    Text="Sair"
                    onClick={() => [exit(), navigate("/")]}
                />
            </div>
        </div>
    )
}

export default Home;