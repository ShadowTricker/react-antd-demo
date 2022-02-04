import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import Home from "./pages/home/home";
import CardList from "./pages/card-list/card-list";
import About from "./pages/about/about";
import Article from "./pages/article/article";
import ArticleEdit from "./pages/article-edit/article-edit";
import NotFound404 from "./pages/404-not-found/404-not-found";
import Login from "./pages/login/login";
import { createContext, useState } from "react";

export const UserInfoContext = createContext({
  username: "",
  updateUsername: () => {}
});

function App() {
  const [username, setUsername] = useState('');

  const updateUsername = name => setUsername(name);


  return (
    <>
      <UserInfoContext.Provider value={{
        username,
        updateUsername
      }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
      </UserInfoContext.Provider>
    </>
  );
}

export default App;
