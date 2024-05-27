import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input/Input";
import CustomBtn from "../../components/Button/CustomBtn";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
                <span>{error}</span>    
                <CustomBtn  
                    Text="Entrar"
                    // onClick={handleLogin}
                />
                <p>Não tem uma conta?
                    <span>
                        <Link to="/register">&nbsp;Cadastrar-se</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login;