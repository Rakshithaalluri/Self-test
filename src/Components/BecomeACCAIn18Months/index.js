import React, { useState } from "react";
import "./index.css";

const BecomeACCAIn18Months = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="acca-request-container">
        <div className="in-container">
          <div className="acca-container">
            <h1 className="heading-acca">Become ACCA in 18 months</h1>
            <p className="acca-description">
              {" "}
              The text content is not crucial, feel free to use any random text
              as needed. Please focus primarily on the design of the project.
            </p>
            <div className="details-container">
              <div className="single-container">
                <div className="flexing">
                  <div className="names">
                    <p className="title">Registered users</p>
                    <p className="count">178975</p>
                  </div>
                </div>
              </div>
              <div className="single-container">
                <div className="flexing">
                  <div className="names">
                    <p className="title">Courses enrolled</p>
                    <p className="count">178975</p>
                  </div>
                </div>
              </div>
              <div className="single-container">
                <div className="flexing">
                  <div className="names">
                    <p className="title">jobs/internships</p>
                    <p className="count">178975</p>
                  </div>
                </div>
              </div>
              <div className="single-container">
                <div className="flexing">
                  <div className="names">
                    <p className="title">Faculty</p>
                    <p className="count">Experts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Broacher-contact-container">
              <button className="download-broacher">Download Broacher</button>
              <button className="Seat-button">Seat allotment</button>
            </div>
          </div>
          <div className="request-callback-function-container">
            <h1 className="request-heading">
              Applying to be an ACCA? Get in touch with us!{" "}
            </h1>
            <input
              type="text"
              className="texting-input"
              placeholder="Phone Number"
            />
            <input type="text" className="texting-input" placeholder="Email" />
            <textarea
              type="text"
              className="texting-input"
              placeholder="Qualification"
            ></textarea>
            <textarea
              type="text"
              className="texting-input"
              placeholder="Percentage"
            ></textarea>
            <button className="request-button" onClick={openModal}>
              {" "}
              Request Call Back{" "}
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Success! We will get back to you shortly.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BecomeACCAIn18Months;
