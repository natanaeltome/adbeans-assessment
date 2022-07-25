import { Link } from "react-router-dom";
import './MenuLinks.scss';

const MenuLinks = ({ toggleOpen, setToggleOpen }) => {

    return (
        <ul className={toggleOpen ? "nav-links--expanded" : "nav-links"}>
            <li>
                <Link className='link' to="/" onClick={() => setToggleOpen(false)}>List</Link>
            </li>
            <li>
                <Link className='link' to="/about" onClick={() => setToggleOpen(false)}>About</Link>
            </li>
        </ul>
    );
};

export default MenuLinks;