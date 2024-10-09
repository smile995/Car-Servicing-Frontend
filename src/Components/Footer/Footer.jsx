import React from "react";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-[#E8E8E8] p-10">
       <div>
        <div><img src={logo} alt="" /></div>
       </div>
        <nav>
          <h6 className="font-bold text-xl text-white">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
