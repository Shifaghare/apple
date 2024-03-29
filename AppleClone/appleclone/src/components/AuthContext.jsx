import {createContext, useEffect, useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "./Axios.Config";

export const AuthContext = createContext();

function reducer(loginState, action){
    switch (action.type){
        case "LOGIN":
            return {...loginState, user:action.payload};
        case "LOGOUT":
            return {...loginState, user:null};
        default:
            return loginState;
    }
}

function ParentContext({children}){
    const initialState = {user:null}

    const [loginState, dispatch] = useReducer(reducer, initialState);

    function Login(data){
        dispatch({type:"LOGIN", payload:data});
    }

    function Logout(){
        dispatch({type:"LOGOUT"});
        localStorage.removeItem('appleuser');
        toast.success('Logout successfull');
    }

    useEffect(() => {

        async function getCurrentUser(){
            try{
                    const response = await api.get(`/auth/getcurrentuser`,{token});
                    if(response.data.success){
                        Login(response.data.user);
                    }
            }catch(error){
                toast.error(error.response.data.message);
            }
        }

        const token = JSON.parse(localStorage.getItem('appleuser'));
        if(token){
            getCurrentUser();
        }
    },[])

    return(
        <AuthContext.Provider value={{Login, Logout, loginState}}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    )
}

export default ParentContext