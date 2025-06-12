import "./ButtonElement.css";

export default function ButtonElement({ children, icon, style, ...props }) {
  return (
    <>
      {" "}
      <button style={style} className="header__button" {...props}>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="button-icon"
            style={{ maxWidth: 14, marginRight: 7 }}
          />
        )}
        {children}
      </button>
    </>
  );
}
