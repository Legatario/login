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
        <div className="h-screen bg-register-image bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center w-full items-center h-full">
                <div className="bg-card-bg p-8 rounded-4p shadow-custom transition-all duration-500 ease-in-out hover:shadow-custom-hover2">
                <h2 className="text-center mb-5 text-black text-2xl uppercase">Cadastro</h2>
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
                        <Input 
                            type="password"
                            placeholder="Confirme a Senha"
                            value={passwordConfig}
                            onChange={(e) => [setpasswordConf(e.target.value), setError("")]}
                        />
                        <div className="mt-2">
                            <span className="text-center p-1 text-red-600">{error}</span>
                        </div>
                        <div  class="flex justify-center">
                            <CustomBtn  
                                Text="Cadastrar"
                                onClick={handleRegister}
                            />
                        </div>    
                        <p className="text-black text-lg text-center p-5">Já tem uma conta?
                            <span>
                                <Link to="/" className="text-black font-bold no-underline transition-all duration-300 ease-out cursor-pointer">&nbsp;Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Register;