import Banner from "../../Components/Banner/Banner";
import TitleSubTitle from "../../Components/SertionTitle/TitleSubTitle";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import check from "../../assets/icons/check.svg";
import deliveryt from "../../assets/icons/deliveryt.svg";
import Wrench from "../../assets/icons/Wrench.svg";
import group from "../../assets/icons/group.svg";
import people from "../../assets/icons/person.svg";
import { FaPhoneAlt, FaRegCalendar } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import UseDataFetch from "../../Hooks/UseDataFetch";
import CardSlider from "../../Components/SliderCard/CardSlider";
import Reviews from "../../Components/Reviews/Reviews";
import { Link } from "react-router-dom";
import { useRef } from "react";

const HomePage = () => {
  const services = UseDataFetch("http://localhost:5000/services");
  const products = UseDataFetch("http://localhost:5000/products");
  const targetSection = useRef(null);

  // Function to scroll to the target section
  const scrollToSection = () => {
    targetSection.current.scrollIntoView({ behavior: 'smooth' });
  };
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
            <p className="text-[#FF3811] font-bold md:text-xl ">About Us</p>
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
            <button onClick={scrollToSection} className="btn btn-error text-white">Get More Info</button>
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
          {services?.map((service) => (
            <ServicesCard service={service} key={service._id}></ServicesCard>
          ))}
        </div>
        <div className="flex justify-center font-bold ">
          <button className=" btn btn-outline btn-error md:my-10 my-5">
            More Services
          </button>
        </div>
        <div className="bg-[#151515] flex justify-evenly text-white m text-2xl md:py-16 p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <div>
              <FaRegCalendar className=" font-bold text-[#FF3811]"></FaRegCalendar>
            </div>
            <div>
              <p className="text-sm">We are open monday-friday</p>
              <p className="font-bold md:text-xl">7:00 am - 9:00 pm</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FaPhoneAlt className=" font-bold text-[#FF3811]"></FaPhoneAlt>
            </div>
            <div>
              <p className="text-sm">Have a question?</p>
              <p className="font-bold md:text-xl">+2546 251 2658</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FaMapLocation className=" font-bold text-[#FF3811]"></FaMapLocation>
            </div>
            <div>
              <p className="text-sm">Need a repair? our address</p>
              <p className="font-bold md:text-xl">Liza Street, New York</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <TitleSubTitle
            heading={"Popular Products"}
            title={"Browse Our Products"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  "
            }
          ></TitleSubTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
        <div className="flex justify-center font-bold ">
          <button className=" btn btn-outline btn-error md:mt-10 my-5">
            More Products
          </button>
        </div>
      </div>
      <div ref={targetSection} className="space-y-2">
        <div className="mb-10">
          <TitleSubTitle
            heading={"Team"}
            title={"Meet Our Team"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>

        <CardSlider></CardSlider>
      </div>
      <div>
        <div className="space-y-2">
          <TitleSubTitle
            heading={"Core Features"}
            title={"Why Choose Us"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>
        <div className="grid gap-4 mt-5 lg:grid-cols-5 grid-cols-3 justify-between items-center">
          <div className="border-2 md:p-4 p-2 hover:text-white rounded-lg text-center hover:bg-[#FF3811]">
            <div className="flex justify-center">
              <img src={check} alt="" />
            </div>
            <p className="font-bold md:text-xl">Timely Delivery</p>
          </div>
          <div className="border-2 md:p-4 p-2 hover:text-white rounded-lg text-center hover:bg-[#FF3811]">
            <div className="flex justify-center">
              <img src={group} alt="" />
            </div>
            <p className="font-bold md:text-xl">Expert Team</p>
          </div>
          <div className="border-2 md:p-4 p-2 hover:text-white rounded-lg text-center hover:bg-[#FF3811]">
            <div className="flex justify-center">
              <img src={people} alt="" />
            </div>
            <p className="font-bold md:text-xl">24/7 Support</p>
          </div>
          <div className="border-2 md:p-4 p-2 hover:text-white rounded-lg text-center hover:bg-[#FF3811]">
            <div className="flex justify-center">
              <img src={Wrench} alt="" />
            </div>
            <p className="font-bold md:text-xl">Best Equipment</p>
          </div>
          <div className="border-2 md:p-4 p-2 hover:text-white rounded-lg text-center hover:bg-[#FF3811]">
            <div className="flex justify-center">
              <img src={deliveryt} alt="" />
            </div>
            <p className="font-bold md:text-xl">Timely Delivery</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <TitleSubTitle
            heading={"Testimonial"}
            title={"What Customer Says"}
            message={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></TitleSubTitle>
        </div>
        <div className="mt-10">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
