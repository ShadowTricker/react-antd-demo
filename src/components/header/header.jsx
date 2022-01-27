import './header.css';
import { Link } from "react-router-dom";


import Container from '../container/container';


export default function Header() {
  return (
    <header>
      <Container>
        <div className="header-shell">
          <div className="logo"></div>
          <nav className="navigator">
            <Link to="/">HOME</Link>
            <Link to="/articles">ARTICLES</Link>
            <Link to="/about">ABOUT</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}