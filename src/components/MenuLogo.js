import './MenuLogo.scss';

const MenuLogo = () => (
    <a href='/' className='logo'>
        <img src={require('../images/logo.png')} alt="BGG Collection Finder"></img>
    </a>
);

export default MenuLogo;