import './Menu.scss';

const Menu = () => (
    <header className="background">
        <nav className='navbar'>
            <a href='#' className='logo'>
                <img src="" alt="BGG Collection Finder logo"></img>
            </a>
            <ul className='nav-links'>
                <li className='link'>List</li>
                <li className='link'>About</li>
            </ul>
        </nav>
    </header>
);

export default Menu;