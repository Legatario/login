import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input/Input";
import CustomBtn from "../../components/Button/CustomBtn";


const Login = () =>{

        const { login } = useAuth();
        const navigate = useNavigate();

        const handleLogin = () =>{
            if(!email | !password){

                setError("Preencha todos os campos");
                return;
            }

        const res = login(email, password);
        
        if(res){
           setError(res)
           return; 
        }

        navigate("/home");
};

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return(
        <div className="h-screen bg-login-image bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center w-full items-center h-full">
                <div className="bg-card-bg p-8 rounded-4p shadow-custom transition-all duration-500 ease-in-out hover:shadow-custom-hover">
                    <h2 className="text-center mb-5 text-black text-2xl uppercase">Login</h2>
                    <div>
                        <Input 
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => [setEmail(e.target.value), setError("")]}
                            
                        />
                                        <Input 
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => [setPassword(e.target.value), setError("")]}
                        />
                        <div className="mt-2">
                            <span className="text-center p-1 text-red-600">{error}</span>
                        </div>
                        <div class="flex justify-center">
                            <CustomBtn  
                                Text="Entrar"
                                onClick={handleLogin}
                            />
                        </div>    
                        <p className="text-black text-lg text-center p-5">Não tem uma conta?
                            <span>
                                <Link to="/register" className="text-black font-bold no-underline transition-all duration-300 ease-out cursor-pointer">&nbsp;Cadastrar-se</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;