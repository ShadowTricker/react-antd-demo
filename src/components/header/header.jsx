import './header.css';
import { Link } from "react-router-dom";


import Container from '../container/container';
import { useContext } from 'react';
import { UserInfoContext } from '../../App';


export default function Header() {
  const { username, updateUsername } = useContext(UserInfoContext);

  return (
    <header>
      <Container>
        <div className="header-shell">
          <div className="logo"></div>
          <nav className="navigator">
            <Link to="/">HOME</Link>
            <Link to="/articles">ARTICLES</Link>
            <Link to="/about">ABOUT</Link>
            { username
              ? <a onClick={updateUsername.bind(null, '')}>LOGOUT</a>
              : <Link to="/login">LOGIN</Link>
            }
          </nav>
        </div>
      </Container>
    </header>
  );
}