import { useState } from "react";
import "./ItemCustomers.css";

export default function ItemCustomers({ totalStars = 5, text, img, name }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: totalStars }, (_, index) => {
    const starValue = index + 1;

    return (
      <span
        key={starValue}
        style={{
          fontSize: "2rem",
          color: starValue <= (hover || rating) ? "#CF6F49" : "#ccc",
          cursor: "pointer",
          transition: "color 0.2s",
          marginBottom: 20,
          display: "inline-block",
        }}
        onClick={() => setRating(starValue)}
        onMouseEnter={() => setHover(starValue)}
        onMouseLeave={() => setHover(0)}
      >
        ★
      </span>
    );
  });

  return (
    <div className="customers__item item-customers">
      <div className="item-customers__stars">{stars}</div>
      <div className="item-customers__text">{text}</div>
      <div className="item-customers__info">
        <div className="item-customers__image">
          <img src={img} alt="Icon" />
        </div>
        <div className="item-customers__name ">
          <div className="name">{name}</div>
          <div className="item-customers__profession">Customer</div>
        </div>
      </div>
    </div>
  );
}
