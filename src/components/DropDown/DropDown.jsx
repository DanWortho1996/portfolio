import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">Menu</button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="/" className="dropdown-item">Home</a>
          <a href="/code" className="dropdown-item">Code</a>
          <a href="/profilepage" className="dropdown-item">Profile</a>
        </div>
      )}
    </div>
    </>
  );
};

export default Dropdown;