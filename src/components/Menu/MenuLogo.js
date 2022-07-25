import './MenuLogo.scss';

const MenuLogo = () => (
    <a href='/'>
        <img className='logo' src={require('../../assets/logo.png')} alt="BGG Collection Finder"></img>
    </a>
);

export default MenuLogo;