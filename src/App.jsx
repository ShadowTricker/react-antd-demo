import './App.css';
import { Routes, Route } from "react-router-dom";

import { Header, Footer } from './components';
import Home from './pages/home/home';
import CardList from './pages/card-list/card-list';
import About from './pages/about/about';
import Article from './pages/article/article';
import ArticleEdit from './pages/article-edit/article-edit';
import NotFound404 from './pages/404-not-found/404-not-found';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<CardList />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/edit" element={<ArticleEdit />}>
            <Route path=":id" element={<ArticleEdit />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
