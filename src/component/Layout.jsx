
import React from "react";
import {Link, Outlet} from "react-router-dom";

function Layout(){
 document.body.style='background :green;';

    
    return(
        <div >
            <ul>
        <li>
            <Link to={"/home"} >Home</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/contact"} >Contact</Link>
        </li>
    </ul>
    <Outlet />
        </div>
    )
}
export default Layout;