import { useEffect, useRef } from 'react';
import './Code.css';

const Code = () => {
  const projectRefs = {
    'HTML & CSS': useRef(null),
    'Programming & Functions': useRef(null),
    'Musical Drum-Kit': useRef(null),
    'Make a CyberPet': useRef(null),
    'To-Do List': useRef(null),
    'The Calculator App': useRef(null),
    'Express': useRef(null),
    'Sequelize': useRef(null),
    'Passwords': useRef(null),
    'Fetch Data-Base Connection': useRef(null),
    'PawPals': useRef(null),
    'Quiz Game': useRef(null)
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1); //This gets the hash without the `#`
    if (hash && projectRefs[hash] && projectRefs[hash].current) {
      projectRefs[hash].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [projectRefs]);

  return (
    <div className="code-page">
      <header className="code-header">
        <h1>My Code Space</h1>
      </header>
      <div className="projects-container">
        <div id="HTML & CSS" className="project" ref={projectRefs['HTML & CSS']}>
          <header className="project-header">
            <h3>HTML & CSS</h3>
          </header>
          <a href="https://danwortho1996.github.io/week1-project-codenation/" alt="Sky" target="_blank">Sky Believe in Better</a>
          <a href="https://danwortho1996.github.io/week1-project-codenation/" target="_blank">
            <img src="/images/week-1-work.PNG" alt="Sky" />
          </a>
          <p>This was made in my first week with Code.Nation when studying a Master Course learning JavaScript (JS). This was made using HTML & CSS only.</p>
        </div>
        <div id="Programming & Functions" className="project" ref={projectRefs['Programming & Functions']}>
          <header className="project-header">
            <h3>Programming & Functions</h3>
          </header>
          <a href="https://github.com/DanWortho1996/week2-programming-basics/blob/main/functions.js" alt="functions" target="_blank">Programming & Functions</a>
          <a href="https://github.com/DanWortho1996/week2-programming-basics/blob/main/functions.js" target="_blank">
            <img src="/images/week-2-work.PNG" alt="functions"/>
          </a>
          <p>This was done in the second week of learning JavaScript (JS). Here I learned how to use functions, arrays, loops, objects and so on. I enjoyed the weeks programming; it was a challenge, and I thoroughly enjoyed it.</p>
        </div>
        <div id="Musical Drum-Kit" className="project" ref={projectRefs['Musical Drum-Kit']}>
          <header className="project-header">
            <h3>Musical Drum-Kit</h3>
          </header>
          <a href='https://danwortho1996.github.io/week3-drumkit-sounds/' alt="drumkit" target="_blank">Drum-Kit</a>
          <a href="https://danwortho1996.github.io/week3-drumkit-sounds/" target='_blank'>
            <img src="/images/week-3-work.PNG" alt="music-app"/>
          </a>
          <p>Making this Drum-Kit Music App was a lot of fun, learning how to use event listeners and implementing them into code such as pressing W to play Bass Drum Sound effect. This event listener taught me a lot because it is used in almost everything right down to a menu click then clicking anywhere off the page to remove the menu drop down.</p>
        </div>
        <div id="Make a CyberPet" className='project' ref={projectRefs['Make a CyberPet']}>
          <header className='project-header'>
            <h3>Make a CyberPet</h3>
          </header>
          <a href='https://danwortho1996.github.io/week4-Make-Cyberpet/' alt="cyberpet" target="_blank">Cyber-Pet</a>
          <a href='https://danwortho1996.github.io/week4-Make-Cyberpet/' target="_blank">
            <img src="/images/week-4-work.PNG" alt="cyber-pet" />
          </a>
          <p>Making this app was extremely entertaining but yet challenging, this project was done in a group I currently only have the old version but on the side from the url you can view and grab the url from the folder Group collab work week 4.</p>
        </div>
        <div id="To-Do List" className='project' ref={projectRefs['To-Do List']}>
          <header className='project-header'>
            <h3>To-Do List</h3>
          </header>
          <a href='https://main--startling-douhua-f11a62.netlify.app/' alt="to-do" target="_blank">The To-Do List</a>
          <a href='https://main--startling-douhua-f11a62.netlify.app/' target='_blank'>
            <img src="/images/week-5-work.PNG" />
          </a>
          <p>I started picking up CSS at this point and learnt more about flex direction and columns, during this we was also to add checkbox and remove box fro such a task if the task had been completed. Here you can add your tasks to the To-Do list and when you have completed them, tick them off and they will be removed or you can remove them yourself via the remove last task button.</p>
        </div>
        <div id="The Calculator App" className='project' ref={projectRefs['The Calculator App']}>
          <header className='project-header'>
            <h3>The Calculator App</h3>
          </header>
          <a href='https://animated-bunny-345a5b.netlify.app/' alt="calculator" target='_blank'>Calculator App</a>
          <a href='https://animated-bunny-345a5b.netlify.app/' target="_blank">
            <img src="/images/week-6-work-calculator.PNG" />
          </a>
          <p>Here is where I started to focus on my CSS more than I expected to, when I built this app it was extremely plain. There was no background or styling just plain text black and white, there was no CSS at all so I spent a couple hours learning through certain parts I wanted to make look good on my calculator app. I am no good at maths though so how about you give it a go instead.</p>
        </div>
        <div id="Express" className='project' ref={projectRefs['Express']}>
          <header className='project-header'>
            <h3>Express</h3>
          </header>
          <a href='https://github.com/DanWortho1996/week7_C.N_express/blob/main/src/books/model.js' alt="express" target="_blank">Express</a>
          <a href='https://github.com/DanWortho1996/week7_C.N_express/blob/main/src/books/model.js' target="_blank">
            <img src="/images/week-7-express.PNG" />
          </a>
          <p>During week 7 we began to learn more about express and data types, like MongoDB & Sequelize. During this week I learned how to build a model schema and a database. I was also able to learn and make how to add users (books) to the database. I really enjoyed this side of coding as it is more Back-End Development. Feel free to check out my code, I hope you like it!</p>
        </div>
        <div id="Sequelize" className='project' ref={projectRefs['Sequelize']}>
          <header className='project-header'>
            <h3>Sequelize</h3>
          </header>
          <a href='https://github.com/DanWortho1996/week8_C.N_sequelize/blob/main/src/db/connection.js' alt="sequelize" target='_blank'>Sequelize</a>
          <a href='https://github.com/DanWortho1996/week8_C.N_sequelize/blob/main/src/db/connection.js' target='_blank'>
            <img src="/images/week-8-sequelize.PNG" />
          </a>
          <p>This was in week 8, I was to learn the difference between sequelize and MongoDB and there really is not much difference besides the Schema and Methods which can used to add a user, find a user or find all users and/or even delete a user or all users on the database. I still enjoyed this as it was Back-End Development and a lot of rigorous testing to make sure all is correct and working efficiently.</p>
        </div>
        <div id="Passwords" className='project' ref={projectRefs['Passwords']}>
          <header className='project-header'>
            <h3>Passwords</h3>
          </header>
          <a href='https://github.com/DanWortho1996/week9_C.N_auth_mysql2/blob/main/src/middleware/auth.js' alt="passwords" target='_blank'>Passwords</a>
          <a href='https://github.com/DanWortho1996/week9_C.N_auth_mysql2/blob/main/src/middleware/auth.js' target='_blank'>
            <img src="/images/week-9-passwords.PNG" />
          </a>
            <p>Starting week 9 I went in with high hopes learning more Back-End Development especially on passwords. I learned how to hashPass and comparePass a password, one being covering password input on Front-End so it is not visible when inputting in the password field, two was to protect the pass from the database so if the database was ever hacked or checked by staff member the password would be shown as a bunch of random letters and number from upper-case to lower-case and the characters given/shown wont match the password.</p>
        </div>
        <div id="Fetch Data-Base Connection" className='project' ref={projectRefs['Fetch Data-Base Connection']}>
            <header className='project-header'>
                <h3>Fetch Data-Base Connection</h3>
            </header>
            <a href='https://github.com/DanWortho1996/week-9-react-auth-starter/blob/main/src/utils/fetch.js' alt="fetch-database" target="_blank">Fetch Data-Base Connection</a>
            <a href='https://github.com/DanWortho1996/week-9-react-auth-starter/blob/main/src/utils/fetch.js' target='_blank'>
            <img src="/images/week-10-connecting-db.PNG" />
            </a>
            <p>When I went into week 10, I went in with the knowledge of using and making a database, I went in with confidence knowing to write the function out of the top of my mind. Here we learned how to connect the Front-End & Back-End together linking the Back-end database as the main database and using the Front-End to store new users to the database.</p>
        </div>
        <div id='PawPals' className='project' ref={projectRefs['PawPals']}>
            <header className='project-header'>
                <h3>PawPals</h3>
            </header>
            <a href='https://prismatic-crumble-cf1d23.netlify.app/' alt="final-project" target="_blank">Final Project</a>
            <a href='https://prismatic-crumble-cf1d23.netlify.app/' target="_blank">
            <img src="/images/week-11-12-final-project-home-page.PNG" />
            <img src="/images/week-11-12-final-project.PNG" />
            </a>
            <p>In our last 2 weeks on the Master Course we was all put into a group and had to collab together on making a app. We decided to come up with a Dog Walking App Community Based, helping others wanting to connect with people and walk their dogs together, maybe even go on dog dates for the dogs. It is intended to be used for Dog Walkers who want to socialize with other Dog Walkers and to also give their own dogs a chance to meet other new dogs and play in the park.</p>
        </div>
        <div id='Quiz Game' className='project' ref={projectRefs['Quiz Game']}>
            <header className='project-header'>
                <h3>Quiz Game</h3>
            </header>
            <a href='https://taupe-maamoul-a4980f.netlify.app/' alt="quiz-project" target="_blank">Quiz Game</a>
            <a href='https://taupe-maamoul-a4980f.netlify.app/' target="_blank">
            <img src="/images/quiz-project.PNG" />
            </a>
            <p>This is a project I worked on myself, in this project I have manually created, chose and added the question's myself. I have also shuffled the Q's so they always come out in a random order. With this being manually added though it does make it a little more straining but fun because I get to choose the Q's & A's. This gives me satisfaction knowing I have fact checked them all and users will be happy to play and learn. They is also a leaderboard but I have not set that up and I will not be setting the leaderboard up to work correctly either. </p>
        </div>
      </div>
    </div>
  );
}

export default Code;