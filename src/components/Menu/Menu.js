import { useState } from 'react';
import MenuLogo from './MenuLogo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';
import './Menu.scss';


const Menu = () => {

    const [toggleOpen, setToggleOpen] = useState(false);
    const handleToggle = () => {
        setToggleOpen(prev => !prev);
    };

    return (
        <header className="background">
            <nav className='navbar'>
                <MenuLogo />
                <MenuLinks toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
                <MenuToggle onClick={handleToggle} />
            </nav>

        </header>
    );
};

export default Menu;