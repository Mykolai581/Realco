import "./MainLogoSection.css";
import Logo1 from "../../../Images/Main/MainLogoSection/01.svg";
import Logo2 from "../../../Images/Main/MainLogoSection/02.svg";
import Logo3 from "../../../Images/Main/MainLogoSection/03.svg";
import Logo4 from "../../../Images/Main/MainLogoSection/04.svg";
import Logo5 from "../../../Images/Main/MainLogoSection/05.svg";

export default function MainLogoSection() {
  return (
    <>
      <section className="main__logo logo">
        <div className="logo__container">
          <div className="logo__title">
            As seen on the world's best magazines and media
          </div>
          <div className="logo__items-images">
            <img src={Logo1} alt="Logo" className="logo__image" />
            <img src={Logo2} alt="Logo" className="logo__image" />
            <img src={Logo3} alt="Logo" className="logo__image" />
            <img src={Logo4} alt="Logo" className="logo__image" />
            <img src={Logo5} alt="Logo" className="logo__image" />
          </div>
        </div>
      </section>
    </>
  );
}
