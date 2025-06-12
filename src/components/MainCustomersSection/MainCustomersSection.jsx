import ItemCustomers from "../ItemCustomers/ItemCustomers";
import "./MainCustomersSection.css";
import Icon1 from "../../../Images/Main/MainCustomersSection/01.svg";
import Icon2 from "../../../Images/Main/MainCustomersSection/02.svg";
import Icon3 from "../../../Images/Main/MainCustomersSection/03.svg";

export default function MainCustomersSection() {
  const customers = [
    {
      text: `"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."`,
      img: Icon1,
      name: "Michael Webb",
    },
    {
      text: `"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor."`,
      img: Icon2,
      name: "Amber Keene",
    },
    {
      text: `"Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl."`,
      img: Icon3,
      name: "Sarah Tarleton",
    },
  ];

  return (
    <section className="main__customers customers">
      <div className="customers__container">
        <div className="customers__content-text">
          <h2 className="customers__title">What customers say</h2>
          <div className="customers__text">
            Faucibus orci luctus et ultrices posuere cubilia curae.
          </div>
        </div>
        <div className="customers__items">
          {customers.map((customer, index) => (
            <ItemCustomers
              key={index}
              text={customer.text}
              img={customer.img}
              name={customer.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
