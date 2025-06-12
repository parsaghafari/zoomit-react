import Navbar from '../navbar/Navbar';
import TopArticles from '../top-articles/TopArticles';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <Navbar />
      <TopArticles />
    </header>
  );
}

export default Header;
