import { useState } from "react";
import "./Contact.css"; // Assuming you'll place the CSS in this file

export default function Contact({ isClicked, setIsClicked }) {
  return (
    <div className="contact-container">
      <div className={`contact-form ${isClicked ? "clicked" : ""}`}>
        <div className="form-content">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button 
              type="button" 
              onClick={() => setIsClicked(!isClicked)}
              className="contact-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
