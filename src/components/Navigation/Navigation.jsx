import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Navigation = () => {
  return (
    <div>
      <header className={s.nav}>
        <div>Movies</div>
        <ul>
          <li>
            <NavLink className={buildLinkClass} to="/">
              HomePages
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
