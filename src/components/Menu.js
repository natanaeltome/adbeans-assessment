import './Menu.scss';
import { Link } from "react-router-dom";

const Menu = () => (
    <header className="background">
        <nav className='navbar'>
            <a href='#' className='logo'>
                <img src="" alt="BGG Collection Finder logo"></img>
            </a>
            <ul className='nav-links'>
                <li >
                    <Link className='link' to="/">List</Link>
                </li>
                <li className='link'>
                    <Link className='link' to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Menu;