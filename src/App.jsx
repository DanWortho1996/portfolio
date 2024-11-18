import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import CodePage from './pages/codePage/CodePage';
import ProfilePage from './pages/profilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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