import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) =>{
    const [user, setUser ] = useState();

    useEffect(() =>{
        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("user_db")

        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[[0]])
        }

    }, [])

    const login = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("user_db"))

        const hasUser = usersStorage?.filter((user)=> user.email === email)

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = '12123';
                localStorage.setItem('user_token', JSON.stringify({email, token}));
                setUser({email, password});
                return;
            }else{
                return "E-mail ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrado"
        }
    };

    const register = (email, password, name) => {
        // const usersStorage = JSON.parse(localStorage.getItem("user_db"));

        // const hasUser = usersStorage?.filter((user)=> user.email === email)
        
        // if(hasUser?.length){
        //     return "Já tem uma conta com esse e-mail"
        // }

        // let newUser;

        // if(usersStorage){

        //     newUser = [...usersStorage, {email, password}];
        // }else{
        //     newUser = [{email, password}];
        // }

        // localStorage.setItem("user_db", JSON.stringify(newUser))
        // return


        const data = {
            "name": name,
            "email": email,
            "password": password,
            "password_confirmation": password,
            "persistent": true
        }

        fetch('https://teste.reobote.tec.br/api/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then((response) =>{console.log(response)}).catch((err)=>console.log(err))
    }

    const exit = () =>{
       setUser(null);
       localStorage.removeItem("user_token") 
    }

    return <AuthContext.Provider
    value={{user, signed: !!user, login, register, exit}}
    >{children}</AuthContext.Provider>
}