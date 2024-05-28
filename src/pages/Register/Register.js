import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input/Input";
import CustomBtn from "../../components/Button/CustomBtn";

const Register = () =>{

    const [email, setEmail] = useState("");
    const [passwordConfig, setpasswordConf] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { register } = useAuth();

    const handleRegister = () =>{
        if(!email | !password | !passwordConfig){
            setError("Preencha todos os campos");
            return;
        }else if(password !== passwordConfig){
            setError("As senhas são diferentes");
            return;
        }

        const res = register(email, password);

        if(res){
            setError(res);
            return;
        }
        setError("usúario cadastrado com sucesso!");

        setTimeout(() => {
            navigate("/")
          }, 2000);

    }

    return(
        <div>
        <h2>Login</h2>
        <div>
            <Input 
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input 
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <Input 
                type="password"
                placeholder="Senha"
                value={passwordConfig}
                onChange={(e) => [setpasswordConf(e.target.value), setError("")]}
            />
            <span>{error}</span>    
            <CustomBtn  
                Text="Cadastrar"
                onClick={handleRegister}
            />
            <p>Já tem uma conta?
                <span>
                    <Link to="/">&nbsp;Login</Link>
                </span>
            </p>
        </div>
    </div>
    )
}

export default Register;