import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './pages/landingPage/LandingPage';
import CodePage from './pages/codePage/CodePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import { data } from './data';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header data={data} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/profilepage" element={<ProfilePage />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;