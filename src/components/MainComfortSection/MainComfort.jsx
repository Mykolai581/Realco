import "./MainComfortSection.css";
import Image from "../../../Images/Main/MainComfortSection/Image.jpg";
import ButtonElement from "../ButtonElement/ButtonElement";

export default function MainComfortSection() {
  return (
    <>
      <section className="main__comfort comfort">
        <div className="comfort__container">
          <div className="comfort__content">
            <div className="comfort__text-top">Comfort first</div>
            <h2 className="comfort__title">
              The best houses for family comfort
            </h2>
            <div className="comfort__text">
              Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin
              sollicitudin, lorem non posuere blandit.
            </div>
            <ButtonElement
              style={{
                backgroundColor: "#fff",
                color: "#2A2C1F",
                boxShadow: "0 2px 4px rgba(17, 17, 17, 0.2)",
                marginBottom: 20,
              }}
            >
              Explore properties
            </ButtonElement>
            <ButtonElement
              style={{ backgroundColor: "#fff", color: "#2A2C1F" }}
            >
              Contact agent {">"}
            </ButtonElement>
          </div>
          <div className="comfort__image">
            <img src={Image} alt="Image" />
          </div>
        </div>
      </section>
    </>
  );
}
