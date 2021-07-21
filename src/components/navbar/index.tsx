import "./index.scss"
import MenuComponent from "./src/MenuComponent"
import LogoComponent from './src/LogoComponent'
import {Link} from "react-router-dom"

interface props{
    reelText:string;
    servicesText:string;
    aboutUsText:string;
}

const NavBar:React.FC<props>=({reelText,servicesText,aboutUsText}) => {
    return (
        <div>
           <div className="container-fluid " id="navbar">
               <div className="row mx-0 d-flex justify-content-between">
                   <div className="logo px-0">
                       <LogoComponent></LogoComponent>
                   </div>
                   <div className="links">
                       <div>
                           <Link to=""><span className="reel">{reelText}</span></Link> 
                           <Link to=""><span className="services">{servicesText}</span></Link> 
                           <Link to=""><span className="about-us">{aboutUsText}</span></Link> 
                       </div>
                   </div>
                   <div className="menu">
                        <MenuComponent></MenuComponent>
                   </div>
                   </div></div> 
        </div>
    )
}

export default NavBar
