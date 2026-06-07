import React from "react";
import "./Service1.css";
import service1img from "../../assets/program-1.png";
import tickimg from "../../assets/checkmark.png";
import { useNavigate } from "react-router-dom";



function Service1() {

  const navigate = useNavigate();

  const gotoHome = () =>{
    navigate('/')
  }

  return (
    <>
    <div className="cover">
    <div className="service">
      <div className="service-left">
        <img className="about-img" src={service1img} alt="" />
      </div>
      <div className="service-right">
        <h2>Software Services</h2>
        <ul>
          <li>
            <img src={tickimg} alt="" />
            Operating System Reinstallaion
          </li>
          <li>
            <img src={tickimg} alt="" />
            Data Recovery
          </li>
          <li>
            <img src={tickimg} alt="" />
            Virus and Malware removal
          </li>
          <li>
            <img src={tickimg} alt="" />
            Unlocking Services
          </li>
          <li>
            <img src={tickimg} alt="" />
            Software Troubleshooting and Optimization
          </li>
        </ul>
        <p>
          This is the only place you should visit to repair your mobile phone.
          Come , there is a solution for every problem on your mobile.
        </p>
        <div className="buttons">
        <button className="btn" onClick={()=> navigate('/')}>Goto Home Page</button>
        <button className="btn "><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeB_x9juEBKUnFav2ehR2AfivYx5m6qoNt8pHXR5ev0NkmLrQ/viewform?usp=pp_url&entry.839337160=Software+Services">Choose this Service</a></button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Service1;
