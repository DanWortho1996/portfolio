import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">Portfolio</h1>
      <SearchBar data={data} />
      <div className="dropdown" ref={dropdownRef}>
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

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;