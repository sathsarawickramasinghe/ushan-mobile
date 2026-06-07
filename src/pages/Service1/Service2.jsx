import React from 'react'
import "./Service1.css";
import service2img from "../../assets/program-2.png";
import tickimg from "../../assets/checkmark.png";
import { useNavigate } from "react-router-dom";

const Service2 = () => {

    
      const navigate = useNavigate();
    
      const gotoHome = () =>{
        navigate('/')
      }

  return (
    <>
        <div className="cover">
        <div className="service">
          <div className="service-left">
            <img className="about-img" src={service2img} alt="" />
          </div>
          <div className="service-right">
            <h2>Battery & Display Services</h2>
            <ul>
              <li>
                <img src={tickimg} alt="" />
                Battery Replacement
              </li>
              <li>
                <img src={tickimg} alt="" />
                Battery Health Diagnosis
              </li>
              <li>
                <img src={tickimg} alt="" />
                Charging Issues Repair
              </li>
              <li>
                <img src={tickimg} alt="" />
                Screen Replacement
              </li>
              <li>
                <img src={tickimg} alt="" />
                Display Calibration & Ghost touch fixes
              </li>
            </ul>
            <p>
              This is the only place you should visit to repair your mobile phone.
              Come , there is a solution for every problem on your mobile.
            </p>
            <div className="buttons">
            <button className="btn" onClick={()=> navigate('/')}>Goto Home Page</button>
            <button className="btn "><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeB_x9juEBKUnFav2ehR2AfivYx5m6qoNt8pHXR5ev0NkmLrQ/viewform?usp=pp_url&entry.839337160=Battery+%26+Display">Choose this Service</a></button>
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default Service2
