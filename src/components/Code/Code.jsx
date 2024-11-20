// import './Code.css';

// const Code = () => {
//     return (
//       <>
//       <div className="code-page">
//         <header className="code-header">
//             <h1>Welcome to My Code Space</h1>
//         </header>
//         <div className="project-one">
//             <header className="project-one-header">
//                 <h3>HTML & CSS</h3>
//             </header>
//             <a href="https://danwortho1996.github.io/week1-project-codenation/" alt="Sky" target="_blank">Sky Believe in better</a>
//             <a href="https://danwortho1996.github.io/week1-project-codenation/" target="_blank">
//             <img src="/images/week-1-work.PNG" alt="Sky"></img>
//             </a>
//             <p>This was made in my first week with Code.Nation when studying a Master Course learning JavaScript (JS). This was made using HTML & CSS only.</p>
//         </div>
//         <div className="project-two">
//             <header className="project-two-header">
//                 <h3>Programming & Functions</h3>
//             </header>
//             <a href="https://github.com/DanWortho1996/week2-programming-basics/blob/main/functions.js" alt="functions" target="_blank">Functions</a>
//             <a href="https://github.com/DanWortho1996/week2-programming-basics/blob/main/functions.js" target="_blank">
//             <img src="/images/week-2-work.PNG" alt="functions"></img>
//             </a>
//             <p>This was done in the second week of learning JavaScript (JS). Here I learned how to use functions, arrays, loops, objects and so on. I enjoyed the weeks programming it was a challenge and I thoroughly enjoyed it.</p>
//           </div>
//         </div>
//       </>
//     )
//   }
  
// export default Code;

import React from 'react';
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
            <img src="/images/week-2-work.PNG" alt="functions" />
          </a>
          <p>This was done in the second week of learning JavaScript (JS). Here I learned how to use functions, arrays, loops, objects and so on. I enjoyed the week's programming; it was a challenge, and I thoroughly enjoyed it.</p>
        </div>
      </div>
    </div>
  );
}

export default Code;
