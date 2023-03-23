import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import Services from "./components/services/Services";
import I404 from "./components/I404/I404";
import Book from "./components/book/Book.jsx";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div className="app-con">
          <Nav />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/getstarted" element={<Book />} />
            <Route path="*" element={<I404 />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
