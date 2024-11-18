import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setResults([]);
    } else {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.content.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setResults([]);
    }
  };

  const handleResultClick = (link) => {
    setResults([]);
    setQuery('');
    navigate(link);
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
      <div className="search-bar" ref={searchBarRef}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Code..."
        />
        {results.length > 0 && (
          <ul className="search-results">
            {results.map((result, index) => (
              <li key={index}>
                <button onClick={() => handleResultClick(result.link)}>
                  {result.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
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

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;