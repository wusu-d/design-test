import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage2 from './pages/landingpage2/LandingPage2';
import Dashboard from './pages/dashboard/Dashboard';
import LandingPage1 from './pages/landingpage1/LandingPage1';
import LandingTwo from './components/landing-two/LandingTwo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="landing-page2" element={<LandingPage2 />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
