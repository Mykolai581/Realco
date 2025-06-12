import "./MainFamiliesSection.css";
import Image from "../../../Images/Main/MainFamiliesSection/Image.svg";
import ButtonElement from "../ButtonElement/ButtonElement";

export default function MainFamiliesSection() {
  return (
    <section className="main__families families">
      <div className="families__container">
        <div className="families__image">
          <img src={Image} alt="Image" />
        </div>
        <h2 className="families__title">Families are our priority</h2>
        <div className="families__text">
          <p>
            Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non,
            placerat vel arcu. In non consectetur lorem. Morbi non varius sapien
            suscipit mauri.
          </p>
        </div>
        <ButtonElement>Get started</ButtonElement>
      </div>
    </section>
  );
}
