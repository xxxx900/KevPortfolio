// import logo from './logo.svg';
import './App.css';
import './Components/Nav.css';
import Header from './Components/Header';
import MainPage from './Pages/Main';
import MainPage2 from './Pages/Main2';
import MainPage3 from './Pages/Main3';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/main1" element={<MainPage />} />
            <Route path="/main2" element={<MainPage2 />} />
            <Route path="/main3" element={<MainPage3 />} />

            {/* The home redirect */}
            <Route path="*" element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;