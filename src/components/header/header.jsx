import './header.css';


export default function Header() {
  return (
    <header>
      <div className="logo"></div>
      <ul className="header-tab">
        <li>HOME</li>
        <li>ARTICLES</li>
        <li>USER</li>
      </ul>
    </header>
  );
}