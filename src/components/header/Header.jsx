import Dropdown from '../DropDown/DropDown';
import './Header.css';

const Header = () => {
  return (
    <>
    <header className="header">
      <h1 className="header-title">Danny's Portfolio</h1>
      <Dropdown />
    </header>
    </>
  );
};

export default Header;
