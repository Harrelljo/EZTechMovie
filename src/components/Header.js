import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/EzMovieLogo.png" alt="EZTech Logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <input type="text" placeholder="Search movies..." />
    </header>
  );
}

export default Header;
