import './Button.scss';

const Button = ({ url, icon, title }) => (
    <a className='button' href={url} target="_blank" rel="noreferrer">
        <i className={`${icon} button__icon`} ></i>
        <span className='button__text'>{title}</span></a>
);

export default Button;