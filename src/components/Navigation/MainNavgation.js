import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={`container-fluid mb-3 py-3 ${classes.header}`}>
      <div>
        <NavLink to="/">
          <span className={`${classes.logo} py-3`}>Find zip</span>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact={true}
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/"
            >
              Get Zip code info
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "yellow",
              }}
              to="/lists"
            >
              Zip Codes Lists
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
