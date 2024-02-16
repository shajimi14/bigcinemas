import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const checkguest = (Component) =>{
    function Wrapper(props){
        var user = useSelector(store=>store.auth.user);
        var navigate = useNavigate();
        useEffect(()=>{
            if(user){
                navigate('/Shows');
            }
        },[user, navigate])
        return  <Component {...props}/>;
    }
    return Wrapper;
}

export default checkguest;