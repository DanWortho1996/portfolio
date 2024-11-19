import DogImage from '../../components/DogImage/DogImage';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-page-header">
        <h1>Welcome to The Portfolio</h1>
      </header>
      <main className="landing-page-main">
        <section className="introduction">
          <h2>About Me I Guess...</h2>
          <p>I have always had an interest for tech and software. I enjoyed breaking down (taking apart) old consoles (e.g., Xbox's, PlayStation's, and Computers) to fix and repair them. Even in movies, I was always fascinated by the tech side because it's very innovative and allows for creative ideas. Personally, I prefer back-end development, working on functions and problem-solving. There is so much more to back-end, but these are my favorite areas. I started coding properly in 2021, studying Level 2 Software Development in Python. In 2024, I completed another course in JavaScript (JS), including JS, React, Vite, JSDOM, JSDOM+, front-end development, back-end development, MongoDB, and Sequelize. After passing the Master Course in October 2024, I received my certificate as a Full Stack Developer.</p>
        </section>
        <section className="dog-image-section">
          <h2>Try Out The Dog API</h2>
          <DogImage />
        </section>
        <section className="oldProject">
          <h2>How I Originally Started Out...</h2>
          <a href='https://danwortho1996.github.io/information/' alt="Python Project" target="_blank">Python Web Development</a>
          <a href='https://github.com/DanWortho1996/KangarooKourt' alt="Python Back-End Game" target="_blank">Python Text-Based Game</a>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
