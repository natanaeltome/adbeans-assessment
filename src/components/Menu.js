import { useState } from 'react';
import './Menu.scss';
import MenuLogo from './MenuLogo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';


const Menu = () => {

    const [toggleOpen, setToggleOpen] = useState(false);

    return (
        <header className="background">
            <nav className='navbar'>
                <MenuLogo />
                <MenuLinks />
                <MenuToggle onClick={toggleOpen} />
            </nav>
        </header>
    );
};

export default Menu;