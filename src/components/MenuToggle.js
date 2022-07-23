import './MenuToggle.scss';

const MenuToggle = ({ onClick }) =>
(
    <>
        <a className='toggle' href="#" tabIndex="0" onClick={onClick} ><i className="fas fa-bars"></i></a>
    </>
);


export default MenuToggle;