import './Code.css';

const Code = () => {
  return (
    <div className="code-page">
      <header className="code-header">
        <h1>Welcome to My Code Space</h1>
      </header>
      <div className="projects-container">
        <div className="project">
          <header className="project-header">
            <h3>HTML & CSS</h3>
          </header>
          <a href="https://danwortho1996.github.io/week1-project-codenation/" alt="Sky" target="_blank">Sky Believe in better</a>
          <a href="https://danwortho1996.github.io/week1-project-codenation/" target="_blank">
            <img src="/images/week-1-work.PNG" alt="Sky" />
          </a>
          <p>This was made in my first week with Code.Nation when studying a Master Course learning JavaScript (JS). This was made using HTML & CSS only.</p>
        </div>
        <div className="project">
          <header className="project-header">
            <h3>Programming & Functions</h3>
          </header>
          <a href="https://github.com/DanWortho1996/week2-programming-basics/blob/main/functions.js" alt="functions" target="_blank">Animation</a>
          <a href="https://github.com/DanWortho1996/week2-programming-basics/blob/main/functions.js" target="_blank">
            <img src="/images/week-2-work.PNG" alt="functions"/>
          </a>
          <p>This was done in the second week of learning JavaScript (JS). Here I learned how to use functions, arrays, loops, objects and so on. I enjoyed the weeks programming; it was a challenge, and I thoroughly enjoyed it.</p>
        </div>
        <div className="project">
          <header className="project-header">
            <h3>Musical Drum-Kit</h3>
          </header>
          <a href='https://danwortho1996.github.io/week3-drumkit-sounds/' alt="drumkit" target="_blank">Drum-Kit</a>
          <a href="https://danwortho1996.github.io/week3-drumkit-sounds/" target='_blank'>
            <img src="/images/week-3-work.PNG" alt="music-app"/>
          </a>
          <p>Making this Drum-Kit Music App was a lot of fun, learning how to use event listeners and implementing them into code such as pressing W to play Bass Drum Sound effect. This event listener taught me a lot because it is used in almost everything right down to a menu click then clicking anywhere off the page to remove the menu drop down.</p>
        </div>
        <div className='project'>
            <header className='project-header'>
                <h3>Make a CyberPet</h3>
            </header>
            <a href='https://danwortho1996.github.io/week4-Make-Cyberpet/' alt="cyberpet" target="_blank">Cyber-Pet</a>
            <a href='https://danwortho1996.github.io/week4-Make-Cyberpet/' target="_blank">
            <img src="/images/week-4-work.PNG" alt="cyber-pet" />
            </a>
            <p>Making this app was extremely entertaining but yet challenging, this project was done in a group I currently only have the old version but on the side from the url you can view and grab the url from the folder Group collab work week 4.</p>
        </div>
        <div className='project'>
            <header className='project-header'>
                <h3>To-Do List</h3>
            </header>
            <a href='https://main--startling-douhua-f11a62.netlify.app/' alt="to-do" target="_blank">The To-Do List</a>
            <a href='https://main--startling-douhua-f11a62.netlify.app/' target='_blank'>
            <img src="/images/week-5-work.PNG" />
            </a>
            <p>I started picking up CSS at this point and learnt more about flex direction and columns, during this we was also to add checkbox and remove box fro such a task if the task had been completed. Here you can add your tasks to the To-Do list and wen you have completed them, tick them off and they will be removed or you can remove them your self via the remove last task button.</p>
        </div>
        <div className='project'>
            <header className='project-header'>
                <h3>The Calculator App</h3>
            </header>
            <a href='https://animated-bunny-345a5b.netlify.app/' alt="calculator" target='_blank'>Calculator App</a>
            <a href='https://animated-bunny-345a5b.netlify.app/' target="_blank">
            <img src="/images/week-5-work-calculator.PNG" />
            </a>
            <p>Here is where I started to focus on my CSS moe than I expected too, when I built this app it was extremely plain, they was no background or styling just plain text black and white, they was no CSS at all so I spent a couple hours learning through certain parts I wanted to make look good on my calculator app. I'm no good at maths though so how about you give it a go instead.</p>
        </div>
      </div>
    </div>
  );
}

export default Code;