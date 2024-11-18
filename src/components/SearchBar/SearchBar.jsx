import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul className="search-results">
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;