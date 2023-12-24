// Dependancies Import //
import React from "react";
import "./ProfileCard.css";

// File Imports //
import profileImage from "../../assets/images/profile.jpg";

function ProfileCard() {
  return (
    <section className="card">
      <div className="cardFloat">29 April 1997</div>
      <div className="profileCover">
        <img
          className="profileCard"
          src={profileImage}
          alt="Gift's profile shot"
        />
        <div className="cardDetails">
          <div className="cardDetails--text">
            <p className="cardDetails--header">CONTACT</p>
            <div className="contacts">
              <p className="contact--item">Midrand, Gauteng</p>
              <p className="contact--item">giftsibiya.gb@gmail.com</p>
              <p className="contact--item">071 244 2080</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
