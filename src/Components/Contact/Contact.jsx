import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail from "../../assets/mail.png"
import phone from "../../assets/phone.png"
import location from "../../assets/placeholder.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f619daaf-c6fc-42ea-bbb5-0c65455ad8d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a massege <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact informations below.your questions,feedback and suggestions are important to us as we strive to provide expectional service to our community.</p>
        <ul>
            <li><img src={mail} alt="" />ushanmobile@gmail.com</li>
            <li><img src={phone} alt="" />0701681356</li>
            <li><img src={location} alt="" />No 2, Main Street, Ampara.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name : </label>
            <input type="text" placeholder='Enter your name here' name='name ' required  />
            <label >Phone Number : </label><input type="tel" name='phone' placeholder='Enter your phone number'required />
            <label>Message : </label>
            <textarea name="message" rows="6" placeholder='Enter your message here'required ></textarea>
            <button type='submit' className="btn">Submit now</button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
