import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title">Portfolio</h1>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          Menu
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/code" className="dropdown-item" onClick={() => setIsOpen(false)}>Code</Link>
            <Link to="/profilepage" className="dropdown-item" onClick={() => setIsOpen(false)}>Profile</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;