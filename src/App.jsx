// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import LandingPage from './pages/landingPage/LandingPage';
// import CodePage from './pages/codePage/CodePage';
// import ProfilePage from './pages/profilePage/ProfilePage';
// import { data } from './data';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header data={data} />
//         <main>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/code" element={<CodePage />} />
//             <Route path="/profilepage" element={<ProfilePage />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/landingPage/LandingPage';
import CodePage from './pages/codePage/CodePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import { data } from './data'; // Import your data
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header data={data} /> {/* Pass the data to the Header component */}
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/profilepage" element={<ProfilePage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
