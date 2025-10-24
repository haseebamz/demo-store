import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "/images/demoStoreLogo.png";
import { DataContext } from "../../App";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthProvider";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { cartCount } = useContext(DataContext);
  const { user, logOutUser } = useContext(AuthContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const navToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // If dropdown is open and the click is outside of it
      if (
        isDropDownActive &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDownActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownActive]);

  return (
    <>
      <div
        className={`${styles.siteHeader} ${isActive ? styles.activeHeader : ""
          } `}
      >
        <div className="container">
          <div className={styles.innerContainer}>
            <div className={styles.navBrandWrapper}>

              <Link to="/">
                <div className={styles.navBrand}>
                  <img src={logo} alt="Logo" width={402} height={203} />
                </div>
              </Link>
            </div>
            <ul className={`${styles.navList} navItems`} >
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} >Home</NavLink>
              </li>
              <li>
                <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? "active" : "")} >About Us</NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs" className={({ isActive }) => (isActive ? "active" : "")} >Contact Us</NavLink>
              </li>
              {user ? <li>
                <NavLink to="/ManageStoreProducts" className={({ isActive }) => (isActive ? "active" : "")} >Manage Inventory</NavLink>
              </li> : null}

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
                <div ref={dropdownRef} className={styles.dropdownWrapper}>
                  {" "}
                  <button
                    className={` ${styles.userDropDown} ${isDropDownActive ? styles.activeDropDown : ""
                      }`}
                    onClick={() => handleDropDown()}
                  >
                    Hi, {user.username}{" "}
                    <i className="fa-solid fa-caret-down"></i>
                    <ul className={styles.dropDownList}>
                      <li>
                        <Link to="/Dashboard">View Profile</Link>
                      </li>
                      <li>
                        <Link to="/ManageStoreProducts">Manage Store</Link>
                      </li>
                      <li
                        onClick={() => {
                          logOutUser();
                        }}
                      >
                        Log out
                      </li>
                    </ul>
                  </button>
                </div>
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
