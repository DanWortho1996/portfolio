import { useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const toggleSkill = (skill) => {
    setOpenSkill(openSkill === skill ? null : skill);
  };

  return (
    <div className="profile-card">
      <header className="profile-header">
        <img src="/images/profile-image.jpg" alt="Danny Worthington" className="profile-image" />
        <h1>About Me</h1>
      </header>
      <div className="profile-content">
        <section className="bio-section">
          <h2>Biography</h2>
          <p>Hello! I am Danny Worthington, a passionate Full Stack Developer with a keen interest in both front-end and back-end technologies. I started my coding journey in 2021 and have since then delved into various programming languages and frameworks. I love solving problems and bringing ideas to life through code.</p>
        </section>
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skill" onClick={() => toggleSkill('JavaScript')}>
            <h3>JavaScript</h3>
            {openSkill === 'JavaScript' && <p>JavaScript is a versatile language used for web development, both on the client-side and server-side.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('React')}>
            <h3>React</h3>
            {openSkill === 'React' && <p>React is a powerful front-end library for building user interfaces with a component-based architecture.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('Node.js')}>
            <h3>Node.js</h3>
            {openSkill === 'Node.js' && <p>Node.js allows for server-side scripting using JavaScript, enabling the development of scalable network applications.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('HTML & CSS')}>
            <h3>HTML & CSS</h3>
            {openSkill === 'HTML & CSS' && <p>HTML and CSS are foundational technologies for building and styling web pages.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('Python')}>
            <h3>Python</h3>
            {openSkill === 'Python' && <p>Python is a high-level programming language known for its readability and versatile use in various applications.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('Java')}>
            <h3>Java</h3>
            {openSkill === 'Java' && <p>Java is a robust programming language widely used in enterprise-level applications and Android development.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('MongoDB')}>
            <h3>MongoDB</h3>
            {openSkill === 'MongoDB' && <p>MongoDB is a NoSQL database known for its flexibility and scalability in handling large volumes of data.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('Sequelize')}>
            <h3>Sequelize</h3>
            {openSkill === 'Sequelize' && <p>Sequelize is an ORM for Node.js that provides easy access to relational databases.</p>}
          </div>
          <div className="skill" onClick={() => toggleSkill('GitHub')}>
            <h3>GitHub</h3>
            {openSkill === 'GitHub' && <p>GitHub is a platform for version control and collaboration, allowing developers to work on projects together from anywhere in the world.</p>}
          </div>
        </section>
        <section className="contact-section">
          <h2>Contact Information</h2>
          <p>NOTICE: Please only contact me if you need advice or you have an idea you might need help with. I would also like for use to only contact me if it regards in a job opportunity. Feel free to browse the portfolio!</p>
          <br></br>
          <p>Email: daniel.worthington96@outlook.com</p>
          <p>Phone: +447514 108 412</p>
        </section>
      </div>
    </div>
  );
}

export default ProfileCard;