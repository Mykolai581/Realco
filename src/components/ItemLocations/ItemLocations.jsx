import "./ItemLocations.css";

export default function ItemLocations({ url, title }) {
  return (
    <div className="locations__item item-locations">
      <a href={url} className="item-locations__link-item">
        <div className="item-locations__title">{title}</div>
        <div className="item-locations__link"> View Properties {" >"}</div>
      </a>
    </div>
  );
}
