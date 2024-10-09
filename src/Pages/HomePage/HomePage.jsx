import Banner from "../../Components/Banner/Banner";
import TitleSubTitle from "../../Components/SertionTitle/TitleSubTitle";

const HomePage = () => {
  return (
    <div className="space-y-28">
      <Banner></Banner>
      <div>about section</div>
      <div>
        <div>
          <TitleSubTitle heading={"Service"} title={"Our Service Area"} message={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "} ></TitleSubTitle>
        </div>
      </div>
      <div>Popular Products</div>
      <div>Team</div>
      <div>Core Features</div>
      <div>Testimonial</div>
    </div>
  );
};

export default HomePage;
