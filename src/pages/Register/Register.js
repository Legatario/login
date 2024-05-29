import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input/Input";
import CustomBtn from "../../components/Button/CustomBtn";

const Register = () =>{

    const [email, setEmail] = useState("luis@gmail.com");
    const [name, setName] = useState("luis");
    const [passwordConfig, setpasswordConf] = useState("123456"); 
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { register } = useAuth();

    const handleRegister = () =>{

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(!email | !password | !passwordConfig){
            setError("Preencha todos os campos");
            return;
        }else if(password !== passwordConfig){
            setError("As senhas são diferentes");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Formato de email inválido");
            return;
        }    

        const res = register(email, password, name);

        if(res){
            setError(res);
            return;
        }
        setError("Usúario cadastrado com sucesso!");

        setTimeout(() => {
            // navigate("/")
          }, 2000);

    }

    return(
        <div className="h-screen bg-register-image bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center w-full items-center h-full">
                <div className="bg-card-bg p-8 rounded-4p shadow-custom transition-all duration-500 ease-in-out hover:shadow-custom-hover max-w-[500px]">
                <h2 className="text-center mb-5 text-black text-2xl uppercase">Cadastro</h2>
                    <div>
                        <Input 
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => [setName(e.target.value), setError("")]}
                        />
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
                            <span className="text-center p-1 text-red-600"><strong>{error}</strong></span>
                        </div>
                        <div  className="flex justify-center">
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