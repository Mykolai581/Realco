import { useState, useEffect, useRef } from "react";
import "./HeaderApp.css";
import Logo from "../../../Images/Logo.svg";
import Arrow from "../../../Images/Arrow.svg";
import Cart from "../../../Images/Cart.svg";
import SearchModalApp from "./SearchModal/SearchModalApp.jsx";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";

export default function HeaderApp() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  const toggleMenuOpenClose = () => setIsOpenMenu(!isOpenMenu);
  const toggleMenu = () => setIsSubmenuOpen(!isSubmenuOpen);
  const handleSubmenuClick = () => setIsSubmenuOpen(false);

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header__top-text">
        <p className="top-text">Get your dream house in a week.</p>
      </div>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <button
            className={`menu-toggle ${isOpenMenu ? "active" : ""}`}
            onClick={toggleMenuOpenClose}
          >
            <span className="menu-toggle__bar"></span>
            <span className="menu-toggle__bar"></span>
            <span className="menu-toggle__bar"></span>
          </button>
          <div className={`header__menu menu ${isOpenMenu ? "active" : ""}`}>
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Home
                  </a>
                </li>
                <li className="menu__item sub-menu" ref={submenuRef}>
                  <button className="sub-menu-toggle" onClick={toggleMenu}>
                    Properties <img src={Arrow} alt="Arrow" />
                  </button>
                  {isSubmenuOpen && (
                    <ul className="sub-menu__list">
                      <li className="sub-menu__item">
                        <a
                          onClick={handleSubmenuClick}
                          href="#"
                          className="sub-menu__link"
                        >
                          Properties
                        </a>
                      </li>
                      <li
                        onClick={handleSubmenuClick}
                        className="sub-menu__item"
                      >
                        <a href="#" className="sub-menu__link">
                          Help
                        </a>
                      </li>
                      <li
                        onClick={handleSubmenuClick}
                        className="sub-menu__item"
                      >
                        <a href="#" className="sub-menu__link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    About
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <SearchModalApp />
            <ButtonElement
              style={{
                backgroundColor: "#fff",
                border: "1px solid #f3ecec",
                boxShadow: " 0 2px 4px rgba(68, 70, 75, 0.2)",
                color: "#000",
                padding: "15px 28px",
              }}
            >
              <img src={Cart} alt="Cart" />
              Cart
            </ButtonElement>
            <ButtonElement style={{ color: "#fff" }}>
              Find a property
            </ButtonElement>
          </div>
        </div>
      </header>
    </>
  );
}
