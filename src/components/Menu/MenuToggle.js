import './MenuToggle.scss';

const MenuToggle = ({ onClick }) =>
(
    <>
        <button className='toggle' tabIndex="0" onClick={onClick} ><i className="fa-solid fa-bars"></i></button>
    </>
);


export default MenuToggle;