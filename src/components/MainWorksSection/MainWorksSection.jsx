import "./MainWorksSection.css";
import Image1 from "../../../Images/Main/MainWorksSection/01.svg";
import Image2 from "../../../Images/Main/MainWorksSection/02.svg";
import Image3 from "../../../Images/Main/MainWorksSection/03.svg";

export default function MainWorksSection() {
  return (
    <>
      <section className="main__works works">
        <div className="works__container">
          <div className="works__content">
            <h2 className="works__title">How it works</h2>
            <div className="works__text">
              Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id
              efficitur pellentesque. Maecenas varius felis felis.
            </div>
          </div>
          <div className="works__items">
            <div className="work__item item-work">
              <div className="item-work__image">
                <img src={Image1} alt="Image" />
              </div>
              <div className="item-work__title">Find property</div>
              <div className="item-work__text">
                Odales mauris quis tellus facilisis, vel mattis magna interdum.
                Curabitur eget aliquam elit. In mauris purus, auctor a eleifend
                non.
              </div>
            </div>
            <div className="work__item item-work">
              <div className="item-work__image">
                <img src={Image2} alt="Image" />
              </div>
              <div className="item-work__title">Make a deal</div>
              <div className="item-work__text">
                Pellentesque suscipit mauris. Nam dictum, erat a volutpat
                varius, urna nisi sollicitudin orci, sagittis facilisis odio
                tortor ac mi.
              </div>
            </div>
            <div className="work__item item-work">
              <div className="item-work__image">
                <img src={Image3} alt="Image" />
              </div>
              <div className="item-work__title">Get your keys</div>
              <div className="item-work__text">
                Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum.
                Duis semper, metus vitae fermentum consequat.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
