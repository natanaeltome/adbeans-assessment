import './MenuLinks.scss';
import { Link } from "react-router-dom";

const MenuLinks = ({ toggleOpen }) => {

    return (
        <ul className={toggleOpen ? "nav-links--expanded" : "nav-links"}>
            <li>
                <Link className='link' to="/">List</Link>
            </li>
            <li>
                <Link className='link' to="/about">About</Link>
            </li>
        </ul>
    );
};

export default MenuLinks;