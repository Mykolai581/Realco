import Item from "../Item/Items";
import "./MainPropertiesSection.css";
import Image1 from "../../../Images/Main/MainPropertiesSection/01.jpg";
import Image2 from "../../../Images/Main/MainPropertiesSection/02.jpg";
import Image3 from "../../../Images/Main/MainPropertiesSection/03.jpg";
import Image4 from "../../../Images/Main/MainPropertiesSection/04.jpg";
import Image5 from "../../../Images/Main/MainPropertiesSection/05.jpg";
import Image6 from "../../../Images/Main/MainPropertiesSection/06.jpg";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";

export default function MainPropertiesSection() {
  return (
    <>
      <section className="main__properties properties">
        <div className="find-app__decoration-top"></div>{" "}
        <div className="find-app__decoration-bottom"></div>
        <div className="properties__container">
          <div className="properties__info">
            <div className="properties__text-top">Properties</div>
            <h2 className="properties__title">Houses in your favorite area</h2>
          </div>
          <div className="properties__items">
            <Item
              img={Image1}
              title="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              place="2263 Southlea, Los Angeles"
              bathtub={"2"}
              bed={"2"}
              square="840 sqft"
            />
            <Item
              img={Image2}
              title="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              place="2263 Southlea, Los Angeles"
              bathtub={"2"}
              bed={"2"}
              square="840 sqft"
            />
            <Item
              img={Image3}
              title="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              place="2263 Southlea, Los Angeles"
              bathtub={"2"}
              bed={"2"}
              square="840 sqft"
            />
            <Item
              img={Image4}
              title="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              place="2263 Southlea, Los Angeles"
              bathtub={"2"}
              bed={"2"}
              square="840 sqft"
            />
            <Item
              img={Image5}
              title="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              place="2263 Southlea, Los Angeles"
              bathtub={"2"}
              bed={"2"}
              square="840 sqft"
            />
            <Item
              img={Image6}
              title="Cozy studio in Los Angeles"
              price="$ 1,200.00 USD"
              place="2263 Southlea, Los Angeles"
              bathtub={"2"}
              bed={"2"}
              square="840 sqft"
            />
          </div>
          <div className="properties__buttons">
            <ButtonElement
              style={{
                backgroundColor: "#fff",
                color: "#2A2C1F",
                boxShadow: "0 2px 4px rgba(17, 17, 17, 0.2)",
              }}
            >
              Explore properties
            </ButtonElement>
            <ButtonElement
              style={{ backgroundColor: "#fcf5f5", color: "#2A2C1F" }}
            >
              Contact agent {">"}
            </ButtonElement>
          </div>
        </div>
      </section>
    </>
  );
}
