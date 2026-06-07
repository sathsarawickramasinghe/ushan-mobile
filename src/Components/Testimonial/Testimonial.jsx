import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideForword = () =>{
        if (tx > -50){
            tx -= 25;
        }
        else{
            tx = 0;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    const slideBackword = () =>{
        if (tx < 0){
            tx += 25;
        }
        else{
            tx = -50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }




  return (
    <div className='testimonials'>
        <img src={next_icon} className="next-btn"  onClick={slideForword}/>
        <img src={back_icon} className="back-btn" onClick={slideBackword} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Sathsara Wickramasinghe</h3>
                                <span>Colombo-7</span>
                            </div>
                        </div>
                        <p>වගකීමක් සහිතව ඉහල සේවාවක්. ඇත්තෙන්ම වගකීමෙන් recommend  කරන්න පුලුවන් ..</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Malshan Swarnasinghe</h3>
                                <span>Ampara</span>
                            </div>
                        </div>
                        <p>ඇත්තටම customer service එක උපරිමයි. ඉක්මනින් අඩුම මිලකට අපේ සේවාව ඉටු කලා</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Ravindu Nuwan</h3>
                                <span>Kandy</span>
                            </div>
                        </div>
                        <p>Higly recommended place. Absolutely there is a good customer service and also best place to repair your phone</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Tharindu Navoda</h3>
                                <span>Ampara</span>
                            </div>
                        </div>
                        <p>හැම තැනකම බැලුවත් අම්පාර නගරයේ අඩුම මිලට  දුරකතන සේවා හමු උනේ මෙතන පමනයි.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonial
