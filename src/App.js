import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Fitur from './Components/Fitur/Fitur';
import Benefit from './Components/Benefit/Benefit';
import Articles from './Components/Articles/Articles';
import Partner from './Components/Partner/Partner';
import TotalUser from './Components/TotalUser/TotalUser';
import Testimoni from './Components/Testimoni/Testimoni';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    loading ? <div className="loading"><ClipLoader color="#7502B5" size={50} /></div> :
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/fitur"
            element={
              <>
                <Navbar />
                <Fitur />
                <Footer />
              </>
            }
          />
          <Route
            path="/benefit"
            element={
              <>
                <Navbar />
                <Benefit />
                <Footer />
              </>
            }
          />
          <Route
            path="/articles"
            element={
              <>
                <Navbar />
                <Articles />
                <Footer />
              </>
            }
          />
          <Route
            path="/partner"
            element={
              <>
                <Navbar />
                <Partner />
                <Footer />
              </>
            }
          />
          <Route
            path="/totaluser"
            element={
              <>
                <Navbar />
                <TotalUser />
                <Footer />
              </>
            }
          />
          <Route
            path="/testimoni"
            element={
              <>
                <Navbar />
                <Testimoni />
                <Footer />
              </>
            }
          />  
        </Routes>
      </Router>
  );
};

export default App;
