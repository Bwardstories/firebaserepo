import React, { useState } from "react";
import "./contactForm.scss";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/mail.png";
import mapMarker from "../../assets/icons/mapMarker.png";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useProvideContact } from "../../hooks";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  websiteType: "",
  message: "",
};
const USER_ID = process.env.REACT_APP_EMAILJS_USER_KEY;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

function ContactForm() {
  const { hideContact } = useProvideContact();
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = e => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.message ||
      !formData.websiteType
    ) {
      toast.error("Sorry, one or more of the input fields were not entered");
      return;
    }

    let formSelector = document.querySelector("#reactForm");
    console.log(formSelector, "form selector");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formSelector, USER_ID).then(
      result => {
        toast.success("Your message has been sent");
        hideContact();
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
  };
  console.log(USER_ID, "USER_ID");

  return (
    <div className="contactContainer">
      <div className="myInfoContainer">
        <h4 className="contactHeader">Contact Information</h4>
        <div className="iconWrapper">
          <div className="iconContainer">
            <img src={phoneIcon} alt="phone icon" />
            <span className="infoText">(843)214-3314</span>
          </div>
          <div className="iconContainer">
            <img src={emailIcon} alt="email icon" />
            <span className="infoText">BrianWardFo8@gmail.com</span>
          </div>
          <div className="iconContainer">
            <img src={mapMarker} alt="map marker icon" />
            <span className="infoText">2217 N Hwy 17a Bonneau, SC 29431</span>
          </div>
        </div>
        <div className="socialLinkContainer">
          <a href="https://www.linkedin.com/in/michael-brian-ward-6494951b2/">
            <img
              className="socialIcons"
              src={linkedInIcon}
              alt="linkedIn logo"
            />
          </a>
          <a href="https://github.com/Bwardstories">
            <img className="socialIcons" src={githubIcon} alt="github logo" />
          </a>
        </div>
      </div>
      <form onSubmit={sendEmail} id="reactForm">
        <div className="col">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col2">
          <div className="form-group">
            <label>What type of website do you need?</label>
            <div id="radio-buttons">
              <div className="radio-button">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="websiteType"
                    id="e-commerce"
                    value={"Ecommerce"}
                    onChange={handleInputChange}
                  />
                  E-commerce
                </label>
              </div>
              <div className="radio-button">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="websiteType"
                    id="personal"
                    value={"personal"}
                    onChange={handleInputChange}
                  />
                  Personal
                </label>
              </div>
              <div className="radio-button">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="websiteType"
                    id="landing-page"
                    value={"Landing Page"}
                    onChange={handleInputChange}
                  />
                  Landing Page
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col3">
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}></textarea>
          </div>
        </div>
        <div className="col4">
          <div className="form-group">
            <button className="primary" type="submit">
              SEND MESSAGE
            </button>
            <button onClick={hideContact} className="closeContactButton">
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
