import './App.css';
import { Routes, Route } from "react-router-dom";

import { Header, Footer } from './components';
import Home from './pages/home/home';
import CardList from './pages/card-list/card-list';
import About from './pages/about/about';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<CardList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
