import { useState } from "react";
import "./MainFindSection.css";
import Image from "../../../Images/Main/MainFindSection/IMAGE.jpg";
import ButtonElement from "../ButtonElement/ButtonElement";
import Search from "../../../Images/Search.svg";

export default function MainFindSection() {
  const [query, setQuery] = useState("");
  const items = [
    { name: "Cozy studio in Los Angeles", price: 1200.0 },
    { name: "Tiny home in San Diego", price: 740000.0 },
    { name: "Modern apartment in San Francisco", price: 3200.0 },
    { name: "Cottage in the woods", price: 980.0 },
    { name: "Villa in Miami", price: 1250000.0 },
    { name: "Penthouse in New York", price: 4500000.0 },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="main__find-app find-app">
      <div className="find-app__decoration1"></div>
      <div className="find-app__container">
        <div className="find-app__decoration2"></div>
        <div className="find-app__content">
          <div className="find-app__text-top">Find your dream place</div>
          <h2 className="find-app__title">
            Find house for your family in minutes
          </h2>
          <p className="find-app__text">
            Aenean sodales mauris quis tellus facilisis, vel mattis magna.
            Interdum curabitur eget aliquam elit in mauris purus.
          </p>
          <form className="find-app__form" onSubmit={(e) => e.preventDefault()}>
            <div className="find-app__body-input">
              <div className="body__input">
                <img src={Search} alt="Search" />
                <input
                  type="text"
                  placeholder="Search"
                  aria-label="Search for property"
                  className="search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <ButtonElement>Find property</ButtonElement>
            </div>

            {query && (
              <ul
                className="find-app__results"
                role="listbox"
                aria-labelledby="search-input"
              >
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => setQuery(item.name)}
                      className="find-app__result-item"
                    >
                      <a href="#" className="find-app__link">
                        {item.name}: <span>${item.price.toLocaleString()}</span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="find-app__result-item">No results found</li>
                )}
              </ul>
            )}
          </form>
        </div>
        <div className="find-app__image">
          <img src={Image} alt="House" />
        </div>
      </div>
    </section>
  );
}
