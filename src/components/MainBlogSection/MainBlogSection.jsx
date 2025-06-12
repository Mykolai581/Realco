import "./MainBlogSection.css";
import ButtonElement from "../ButtonElement/ButtonElement.jsx";
import Image1 from "../../../Images/Main/MainPropertiesSection/01.jpg";
import Image2 from "../../../Images/Main/MainPropertiesSection/02.jpg";
import Image3 from "../../../Images/Main/MainPropertiesSection/03.jpg";
import ItemBlog from "../ItemBlog/ItemBlog.jsx";

export default function MainBlogSection() {
  const items = [
    {
      img: Image1,
      date: "Trends",
      title: "The 9 best homes in New York",
      text: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.",
    },
    {
      img: Image2,
      date: "DIY",
      title: "How to easily buy a house with Realco",
      text: "Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.",
    },
    {
      img: Image3,
      date: "DIY",
      title: "Renting houses - complete guide",
      text: "Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.",
    },
  ];

  return (
    <section className="main__blog blog">
      <div className="blog__container">
        <div className="blog__content">
          <div className="blog__info">
            <div className="blog__text-top">Blog</div>
            <h2 className="blog__title">Latest posts</h2>
            <div className="blog__text">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae. Praesent efficitur nibh massa morbi
              sagittis ornare dui in ornare.
            </div>
          </div>
          <ButtonElement
            style={{
              backgroundColor: "#fff",
              color: "#2A2C1F",
            }}
          >
            View all
          </ButtonElement>
        </div>

        <div className="blog__items">
          {items.map((item, index) => (
            <ItemBlog
              key={index}
              img={item.img}
              date={item.date}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
