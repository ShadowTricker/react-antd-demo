import './header.css';

import Container from '../container/container';


export default function Header() {
  return (
    <header>
      <Container>
        <div className="header-shell">
          <div className="logo"></div>
          <ul className="header-tab">
            <li>HOME</li>
            <li>ARTICLES</li>
            <li>USER</li>
          </ul>
        </div>
      </Container>
    </header>
  );
}