import { useState, useEffect } from "react";
import "./SearchModalApp.css";
import Search from "../../../../Images/Search.svg";
import ButtonElement from "../../ButtonElement/ButtonElement";

export default function SearchModalApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setQuery("");
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="header__search-modal search-modal">
      <button
        className="search-modal__button"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={Search} alt="Search" /> Search
      </button>

      {isModalOpen && (
        <div
          className="search-modal__modal"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setIsModalOpen(false);
            setQuery("");
          }}
        >
          <div
            className="search-modal__main-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              className="search-modal__input"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query.trim() !== "" && (
              <ul className="search-modal__list">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li key={index} className="search-modal__item">
                      <a href="#" className="search-modal__link">
                        {item.name} <span>${item.price.toLocaleString()}</span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li>Nothing found</li>
                )}
              </ul>
            )}

            <ButtonElement
              onClick={() => {
                setIsModalOpen(false);
                setQuery("");
              }}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #f3ecec",
                boxShadow: " 0 2px 4px rgba(68, 70, 75, 0.2)",
                color: "#000",
                padding: "10px 20px",
              }}
            >
              Close
            </ButtonElement>
          </div>
        </div>
      )}
    </div>
  );
}
