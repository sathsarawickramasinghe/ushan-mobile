import React from "react";
import "./About.css";
import about_img from "../../assets/aboutimg.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
      </div>
      <div className="about-right">
        <h2>About Us</h2>
        <h3>Good to Know more</h3>
        <p>
          Ushan Mobile, a major mobile phone repair center  located in Ampara,
          has been providing services to a large number of people for more than
          5 years and is still providing services today. It is unique that this
          is the only iPhone repair center in the area, consisting of talented technitions with more than 3 years of experience in this field. 
        </p>
        <p>This is the only place you should visit to repair your mobile phone. Come , there is a solution for every problem on your mobile.</p>
      </div>
    </div>
  );
};

export default About;
