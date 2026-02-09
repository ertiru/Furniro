import React from "react";
import location from "../../assets/location.png";
import clock from "../../assets/clock.png";
import phone from "../../assets/phone.png";

const ContactInfo = () => {
  return (
    <div className="produkt">
      <div className="container">
        <div className="contact">
          <div className="infos">
            <div className="kolon">
              <div>
                <img src={location} />
              </div>
              <div>
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="kolon">
              <div>
                <img src={phone} />
              </div>
              <div>
                <h3>Phone</h3>
                <p>
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="kolon">
              <div>
                <img src={clock} />
              </div>
              <div>
                <h3>Working Time</h3>
                <p>
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="infos">
            <label>Your Name</label>
            <input type="text" placeholder="ABC"></input>
            <label>Email Address</label>
            <input type="email" placeholder="abd@def.com"></input>
            <label>Subject</label>
            <input type="text" placeholder="This is an optional"></input>
            <label>Your Message</label>
            <textarea placeholder="Hi! i'd like to ask about"></textarea>
            <div>
              <button className="subbutton" width="auto" height="auto">
                SUBMMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
