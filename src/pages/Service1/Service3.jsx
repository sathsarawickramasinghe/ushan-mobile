import React from "react";
import "./Service1.css";
import service3img from "../../assets/program-3.png";
import tickimg from "../../assets/checkmark.png";
import { useNavigate } from "react-router-dom";

const Service3 = () => {

    
      const navigate = useNavigate();
    
      const gotoHome = () =>{
        navigate('/')
      }

  return (
     <>
        <div className="cover">
        <div className="service">
          <div className="service-left">
            <img className="about-img" src={service3img} alt="" />
          </div>
          <div className="service-right">
            <h2>Any Other Services</h2>
            <ul>
              <li>
                <img src={tickimg} alt="" />
                Water Damage Repair
              </li>
              <li>
                <img src={tickimg} alt="" />
                Camera Repair & Replacement
              </li>
              <li>
                <img src={tickimg} alt="" />
                Speacker & Microphone Repair
              </li>
              <li>
                <img src={tickimg} alt="" />
                Button Replacement
              </li>
              <li>
                <img src={tickimg} alt="" />
                Housing / Frame Replacement
              </li>
            </ul>
            <p>
              This is the only place you should visit to repair your mobile phone.
              Come , there is a solution for every problem on your mobile.
            </p>
            <div className="buttons">
            <button className="btn" onClick={()=> navigate('/')}>Goto Home Page</button>
            <button className="btn "><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeB_x9juEBKUnFav2ehR2AfivYx5m6qoNt8pHXR5ev0NkmLrQ/viewform?usp=pp_url&entry.839337160=Other+Service">Choose this Service</a></button>
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default Service3
