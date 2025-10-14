import React, { useContext, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "/images/demoStoreLogo.png";
import { DataContext } from "../../App";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthProvider";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { cartCount } = useContext(DataContext);
  const { user, logOutUser } = useContext(AuthContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const handleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const navToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={`${styles.siteHeader} ${
          isActive ? styles.activeHeader : ""
        } `}
      >
        <div className="container">
          <div className={styles.innerContainer}>
            <div className={styles.navBrandWrapper}>
              <Link to="/">
                <div className={styles.navBrand}>
                  <img src={logo} alt="Demo Store" width={402} height={203} />
                </div>
              </Link>
            </div>
            <ul className={styles.navList}>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/Media">Media </Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us </Link>
              </li>
            </ul>
            <div
              className={`d-flex align-items-center gap-3 justify-content-end gap-lg-4 ${styles.navRightWrapper} `}
            >
              <Link to="/Cart">
                <div className={styles.cartIcon}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className={styles.cartCount}>{cartCount}</span>
                </div>
              </Link>
              {user ? (
                <>
                  {" "}
                  <button
                    className={` ${styles.userDropDown} ${
                      isDropDownActive ? styles.activeDropDown : ""
                    }`}
                    onClick={() => handleDropDown()}
                  >
                    Hi, {user.username}{" "}
                    <i className="fa-solid fa-caret-down"></i>
                    <ul className={styles.dropDownList}>
                      <li>
                        <Link to="/Dashboard">View Profile</Link>
                      </li>
                      <li>Manage Store</li>
                      <li
                        onClick={() => {
                          logOutUser();
                        }}
                      >
                        Log out
                      </li>
                    </ul>
                  </button>
                  {/* <Link to="/" ></Link> */}
                  {/* <button
                    onClick={() => {
                      logOutUser();
                    }}
                  >
                    LOGOUT
                  </button> */}
                </>
              ) : (
                <>
                  <Link
                    to="/Login"
                    className="CustomBtn btnBgPrimary d-none d-lg-block"
                  >
                    LOGIN
                  </Link>
                  <Link to="/Login">
                    <i className="fa-solid fa-user d-lg-none"></i>
                  </Link>
                </>
              )}

              <div className={styles.navToggler} onClick={() => navToggle()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
