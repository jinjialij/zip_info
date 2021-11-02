import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={`container-fluid mb-3 py-3 ${classes.header}`}>
      <div>
        <Link to="/">
          <span className={`${classes.logo} py-3`}>Find zip</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Get Zip code information</Link>
          </li>
          <li>
            <Link to="/lists">Zip Codes Lists</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
