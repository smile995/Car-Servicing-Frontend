import Banner from "../../Components/Banner/Banner";
import TitleSubTitle from "../../Components/SertionTitle/TitleSubTitle";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import { useContext, useEffect, useState } from "react";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import { CarContextAuth } from "../../../UseContext/CarContext";

const HomePage = () => {
  const {name}=useContext(CarContextAuth)
  console.log({name});
  
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((service) => setServices(service));
  }, []);
  return (
    <div className="lg:space-y-20 space-y-10">
      <Banner></Banner>
      <div>
        <div className="md:flex gap-5 items-center p-2 space-y-4 ">
          <div className="md:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2  top-1/2 left-1/2 border-8 border-white absolute rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-1 md:w-1/2">
            <p className="text-[#FF3811] font-bold text-xl ">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <TitleSubTitle
            heading={"Service"}
            title={"Our Service Area"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServicesCard service={service} key={service._id} ></ServicesCard>
          ))}
        </div>
      </div>
      <div>
        <div>
          <TitleSubTitle
            heading={"Popular Products"}
            title={"Browse Our Products"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  "
            }
          ></TitleSubTitle>
        </div>
      </div>
      <div>
        <div>
          <TitleSubTitle
            heading={"Team"}
            title={"Meet Our Team"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>
      </div>
      <div>
        <div>
          <TitleSubTitle
            heading={"Core Features"}
            title={"Why Choose Us"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>
      </div>
      <div>
        <div>
          <TitleSubTitle
            heading={"Testimonial"}
            title={"What Customer Says"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
