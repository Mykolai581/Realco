import ButtonElement from "../ButtonElement/ButtonElement";
import "./ItemBlog.css";

export default function ItemBlog({ img, date, title, text }) {
  return (
    <div className="blog__item item-blog">
      <div className="item-blog__image">
        <img src={img} alt="Image" />
      </div>
      <div className="item-blog__content">
        <div className="item-blog__info">
          <div className="item-blog__date">{date}</div>
          <div className="item-blog__date-info">May 10, 2022</div>
        </div>
        <div className="item-blog__title">{title}</div>
        <div className="item-blog__text">{text}</div>
        <ButtonElement style={{ backgroundColor: "#fff", color: "#2A2C1F" }}>
          Read more {">"}
        </ButtonElement>
      </div>
    </div>
  );
}
