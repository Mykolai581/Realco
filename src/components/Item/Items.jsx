import "./Item.css";
import Place from "../../../Images/Main/MainPropertiesSection/place.svg";
import Bathtub from "../../../Images/Main/MainPropertiesSection/bathtub.svg";
import Bed from "../../../Images/Main/MainPropertiesSection/bed.svg";
import Square from "../../../Images/Main/MainPropertiesSection/square_foot.svg";

export default function Item({
  img,
  title,
  price,
  place,
  bathtub,
  bed,
  square,
}) {
  return (
    <div className="properties__item item-properties">
      <div className="item-properties__image">
        <img src={img} alt="Image" />
      </div>
      <div className="item-properties__content">
        <h2 className="item-properties__title">{title}</h2>
        <div className="item-properties__price">{price}</div>
        <div className="item-properties__place">
          <img src={Place} alt="Place icon" /> {place}
        </div>
        <div className="item-properties__info info">
          <div className="info__bathtub">
            <img src={Bathtub} alt="Bathtub icon" /> {bathtub}
          </div>
          <div className="info__bad">
            <img src={Bed} alt="Bad icon" /> {bed}
          </div>
          <div className="info__square">
            <img src={Square} alt="Square icon" /> {square}
          </div>
        </div>
      </div>
    </div>
  );
}
