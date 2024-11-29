import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === '') {
      setResults([]);
    } else {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.content.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setResults([]);
    }
  };

  const handleResultClick = (title) => {
    setResults([]);
    setQuery('');
    navigate(`/code#${title}`);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar" ref={searchBarRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li key={index}>
              <button onClick={() => handleResultClick(result.title)}>
                {result.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default SearchBar;