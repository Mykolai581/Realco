import ButtonElement from "../ButtonElement/ButtonElement";
import ItemLocations from "../ItemLocations/ItemLocations";
import "./MainLocationsSection.css";

export default function MainLocationsSection() {
  return (
    <section className="main__locations locations">
      <div className="locations__container">
        <div className="locations__content">
          <h2 className="locations__title">Locations</h2>
          <div className="locations__text">
            Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer
            lacus urna, aliquet non nisl sit amet.
          </div>
        </div>
        <div className="locations__items">
          <ItemLocations
            url={
              "https://www.google.com/maps/place/San+Francisco,+CA/data=!4m2!3m1!1s0x80859a6d00690021:0x4a501367f076adff?sa=X&ved=1t:155783&ictx=111"
            }
            title={"San Francisco, CA"}
          />
          <ItemLocations
            url={
              "https://www.google.com/maps/place/%D0%9B%D0%BE%D1%81-%D0%90%D0%BD%D0%B4%D0%B6%D0%B5%D0%BB%D0%B5%D1%81,+%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@34.0204789,-118.4117326,10z/data=!3m1!4b1!4m6!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0549076!4d-118.242643!16s%2Fm%2F030qb3t?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            title={"Los Angeles, CA"}
          />
          <ItemLocations
            url={
              "https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD-%D0%94%D1%96%D0%B5%D2%91%D0%BE,+%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@32.8244879,-117.10776,10z/data=!3m1!4b1!4m6!3m5!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838!16zL20vMDcxdnI?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            title={"San Diego, CA"}
          />
          <ItemLocations
            url={
              "https://www.google.com/maps/place/%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@40.6971415,-73.979506,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            title={"New York, NY"}
          />
          <ItemLocations
            url={
              "https://www.google.com/maps/place/%D0%9B%D0%B0%D1%81-%D0%92%D0%B5%D2%91%D0%B0%D1%81,+%D0%9D%D0%B5%D0%B2%D0%B0%D0%B4%D0%B0,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@36.1248867,-115.3401513,11z/data=!3m1!4b1!4m6!3m5!1s0x80beb782a4f57dd1:0x3accd5e6d5b379a3!8m2!3d36.171563!4d-115.1391009!16zL20vMGN2M3c?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            title={"Las Vegas, NV"}
          />
          <ItemLocations
            url={
              "https://www.google.com/maps/place/%D0%9C%D0%B0%D1%8F%D0%BC%D1%96,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@25.782414,-80.2253934,12z/data=!3m1!4b1!4m6!3m5!1s0x88d9b0a20ec8c111:0xff96f271ddad4f65!8m2!3d25.7616798!4d-80.1917902!16zL20vMGYydjA?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            title={"Miami, FL"}
          />
        </div>
        <div className="locations__buttons">
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
  );
}
