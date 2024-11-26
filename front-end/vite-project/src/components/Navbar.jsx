import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";


const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
            <NavLink to={'/Vegetables'}className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdCategory />Vegetables</div></NavLink>
            <NavLink to={'/Fruits'}className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop2 />Fruits</div></NavLink>
            <NavLink to={'/Grains'}className={({isActive}) => isActive ? "active_link": "" }><div className="flexCenter gap-x-1"><MdContacts />Grains</div></NavLink>
            <NavLink to ={'/About'}className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdContacts />About Us</div></NavLink>
        </nav>
    )
}

export default Navbar;
