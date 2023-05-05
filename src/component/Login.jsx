import { useEffect, useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";



function Login(){
    const [name , setName] = useState("");

    const navigate = useNavigate();

    useEffect(
        () => {
            let logedIn = localStorage.getItem("login");
            if(logedIn){
                navigate("/");
            }
        }
    )

    let login = (e) =>{
        // e.preventdefault();
        // event.preventdefault();
        localStorage.setItem("login", true);
        localStorage.setItem("name" , name);
        <Navigate to="/" />
    }
    return(
        <div>
            <h1>
                This is Login Page
            </h1>

            <form onSubmit={login}>
                <input type="text" 
                onChange={
                    (e) => {
                        setName(e.target.value)
                    }
                } 
                />
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;