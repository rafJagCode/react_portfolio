import './Logo.css';
import logoUrl from '../../assets/images/logo.svg';

const Logo = () => {
  return <img className="logo" src={logoUrl} alt="logo" />;
};

export default Logo;
