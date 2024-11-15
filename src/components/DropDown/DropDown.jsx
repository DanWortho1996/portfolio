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
          <a href="#option1" className="dropdown-item">Code</a>
          <a href="#option2" className="dropdown-item">Profile</a>
          <a href="#option3" className="dropdown-item">Comments</a>
        </div>
      )}
    </div>
    </>
  );
};

export default Dropdown;