import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/page-one"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Recommended
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-two"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Photos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-three"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Weather
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page-four"
                className={(navData) => (navData.isActive ? styles.active : "")}
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
