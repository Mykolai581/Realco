import "./MainQuickSection.css";
import Image from "../../../Images/Main/MainQuickSection/Image.jpg";
import Image1 from "../../../Images/Main/MainQuickSection/01.svg";
import Image2 from "../../../Images/Main/MainQuickSection/02.svg";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";

export default function MainQuickSection() {
  return (
    <>
      <section className="main__quick quick">
        <div className="quick__container">
          <div className="quick__image">
            <img src={Image} alt="Image" />
          </div>
          <div className="quick__content">
            <div className="quick__text-top">Quick and easy</div>
            <h2 className="quick__title">Fast forward process</h2>
            <div className="quick__text">
              Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit
              amet mi arcu praesent nec felis nisl.
            </div>

            <div className="quick__items">
              <div className="quick__item item-quick">
                <div className="item-quick__image">
                  <img src={Image1} alt="Image" />
                </div>
                <h2 className="item-quick__title">Affordable prices</h2>
                <div className="item-quick__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
              </div>
              <div className="quick__item item-quick">
                <div className="item-quick__image">
                  <img src={Image2} alt="Image" />
                </div>
                <h2 className="item-quick__title">Less paper work</h2>
                <div className="item-quick__text">
                  Curabitur porta luctus semper donec eget lobortis leo ac
                  finibus nisi.
                </div>
              </div>
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
        </div>
      </section>
    </>
  );
}
