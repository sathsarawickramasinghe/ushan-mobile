import React from 'react'
import "./Services.css"
import service1 from "../../assets/program-1.png"
import service2 from "../../assets/program-2.png"
import service3 from "../../assets/program-3.png"
import { useNavigate } from 'react-router-dom'

const Services = () => {

  const navigate = useNavigate();

  
  

  return (
    <div className=' programs'>
      <div className="program" onClick={()=> navigate('/service1')}>
        <img src={service1} alt="Service 1" />
        <div className="caption">
            <p>Software Services</p>
        </div>
      </div>
      <div className="program"  onClick={()=> navigate('/service2')}>
        <img src={service2} alt="Service 2" />
        <div className="caption">
            <p>Battery and Display Replace</p>
        </div>
      </div>
      <div className="program"onClick={()=> navigate('/service3')}>
        <img src={service3} alt="Service 3" />
        <div className="caption">
            <p>Any Other Services</p>
        </div>
      </div>
    </div>
  )
}

export default Services
