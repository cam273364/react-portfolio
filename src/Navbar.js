import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


function Navbar() {
    let location = useLocation();
    console.log(location)

    return (
     <nav class="navbar navbar-expand-md navbar-dark bg-dark">
     <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
         <ul class="navbar-nav mr-auto">
             <li class="nav-item">
                 <Link to={"/"} class="nav-link" id={location.pathname === "/" && "active-link"}>About Me</Link>
             </li>
             <li class="nav-item">
                 <Link to={"/portfolio"} class="nav-link" id={location.pathname === "/portfolio" && "active-link"}>Portfolio</Link>
             </li>
             <li class="nav-item">
                 <Link to={"/contact"} class="nav-link" id={location.pathname === "/contact" && "active-link"}>Contact</Link>
             </li>
             <li class="nav-item">
                 <Link to={"/resume"} class="nav-link" id={location.pathname === "/resume" && "active-link"}>Resume</Link>
             </li>
             
         </ul>
     </div>
     <div class="mx-auto order-0">
         <Link to={"/"} class="navbar-brand mx-auto">Cameron Malone</Link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
             <span class="navbar-toggler-icon"></span>
         </button>
     </div>
    
 </nav>
    )
 
 }
 
 export default Navbar