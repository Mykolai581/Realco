import { useState } from "react";
import "./Footer.css";
import Logo from "../../../Images/Logo.svg";
import FaceBook from "../../../Images/Footer/FaceBook.svg";
import Instagram from "../../../Images/Footer/Instagram.svg";
import Twitter from "../../../Images/Footer/Twitter.svg";
import In from "../../../Images/Footer/In.svg";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";

export default function Footer() {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const pages = [
    "Home",
    "About",
    "Blog",
    "Agents",
    "Contact",
    "FAQs",
    "Properties",
  ];
  const cmsPages = [
    "Property",
    "Property Single",
    "Blog Categories",
    "Blog Single",
    "Agent Single",
  ];
  const utilityPages = [
    "Style Guide",
    "Changelog",
    "Licenses",
    "404",
    "Password",
    "Search",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormData({ email: "" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <a href="#" className="footer__link-logo">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="footer__items">
          <div className="footer__item item-footer">
            <div className="item-footer__title">Pages</div>
            <ul className="item-footer__list">
              {pages.map((page, index) => (
                <li key={index} className="item-footer__item">
                  <a href="#" className="item-footer__link">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item item-footer">
            <div className="item-footer__title">CMS Pages</div>
            <ul className="item-footer__list">
              {cmsPages.map((page, index) => (
                <li key={index} className="item-footer__item">
                  <a href="#" className="item-footer__link">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item item-footer">
            <div className="item-footer__title">Utility Pages</div>
            <ul className="item-footer__list">
              {utilityPages.map((page, index) => (
                <li key={index} className="item-footer__item">
                  <a href="#" className="item-footer__link">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__form form-footer">
          <div className="form-footer__title">Subscribe</div>
          <div className="footer-footer__text">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <form onSubmit={handleSubmit} className="form-footer__form-element">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-footer__input"
              placeholder="Enter your email"
            />
            <ButtonElement style={{ marginBottom: 20 }} type="submit">
              Subscribe
            </ButtonElement>
          </form>
          <div className="form-footer__sub">
            <span>By subscribing you agree to with our </span>Privacy Policy
          </div>
          {errors.email && <p className="text-red">{errors.email}</p>}
        </div>
      </div>
      <div className="footer__bottom bottom">
        <div className="bottom__container">
          <div className="button__text">© Realco by Minimal Square</div>
          <div className="bottom__item">
            <a href="#" className="bottom__link">
              <img src={FaceBook} alt="FaceBook Icon" />
            </a>
            <a href="#" className="bottom__link">
              <img src={Instagram} alt="Instagram Icon" />
            </a>
            <a href="#" className="bottom__link">
              <img src={Twitter} alt="Twitter Icon" />
            </a>
            <a href="#" className="bottom__link">
              <img src={In} alt="In Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
