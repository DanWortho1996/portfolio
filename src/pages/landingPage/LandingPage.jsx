import DogImage from '../../components/DogImage/DogImage';
import CatImage from '../../components/CatImage/CatImage';
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
        <section className="image-sections">
          <div className="image-section">
            <h2>Try The Dog API</h2>
            <div className="api-image">
              <DogImage />
            </div>
          </div>
          <div className="image-section">
            <h2>Try The Cat API</h2>
            <div className="api-image">
              <CatImage />
            </div>
          </div>
        </section>
        <section className="oldProject">
          <h2>How I Originally Started Out...</h2>
          <a href='https://danwortho1996.github.io/information/' alt="Python Project" target="_blank"><p>Python Web Development</p></a>
          <p>I studied Level 2 Software Development (Python-based) with Code.Nation, This was my first ever attempt on building a website. Here I used HTML & CSS only. This shows how much of a beginner I was when I started out in 2021. I decided to build this website purely for the fact I wanted it to be a Games Review/Comments Site for users to get there following information regarding games and whether it could be worth there time.</p>
          <a href='https://github.com/DanWortho1996/KangarooKourt' alt="Python Back-End Game" target="_blank"><p>KangarooKourt (T-B-G)</p></a>
          <p>This is KangarooKourt, Kangaroo Kourt is a Text-Based-Game. This game was also made in my Level 2 Software Development (Python-based). This game was made in a group and can only be played on the Back-End of development e.g, Terminal. To run this game you will need to git pull the code to your computer or laptop you can view this from the link above. Once git pulled you will enter in your terminal as shown py KangarooKourt.py This will run the code in the terminal and the game will begin in the terminal too. we tended to make the game more of a question riddle game, making the player jump stragiht in and trying to figure out while at the same time trying to escape court justcie, bare in mind your in the court room as all this is going on.</p>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;