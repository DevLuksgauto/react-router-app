import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Auth from "./AuthButton";

export default function Nav(props) {
    
    const login = useSelector(state=>state);
    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        let {from} = location.state || {from: {pathname:'/'}}
        if(login) {
            history.replace(from)
        }
    },[login])

    return(
        <nav className="nav">
            <h1 className="logo"><Link to="/">ProgBr</Link></h1>
            <ul className="nav-links">
                <Auth />
                <li><Link to="/aulas" >Aulas</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}