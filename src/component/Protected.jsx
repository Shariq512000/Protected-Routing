import { useEffect, useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";


function Protected(props){

    const [user , setUser] = useState("")
    let {Component} = props;

    const navigate = useNavigate();

    useEffect(
        () => {
            let logedIn = Boolean(localStorage.getItem("login"));
            setUser(logedIn);
            if(!logedIn){
                navigate("/login")
            }
        }
    )

    return(
        <div>
            <h1>Protected</h1>
            {user}
            {console.log("User" , user)}

            <Component />

        </div>
    )

}
export default Protected;