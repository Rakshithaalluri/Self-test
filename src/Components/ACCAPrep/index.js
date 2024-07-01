import React, { useState } from "react";
import "./index.css";

const ACCAPrep = () => {
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
            <h1 className="heading-acca">
              Kick off your ACCA Prep journey with IndigoLearn
            </h1>
            <p className="acca-description">
              Sign-in and get instant access to our FREE courses
            </p>

            <div className="Broacher-contact-container">
              <button className="Seat-button">Seat allotment</button>
            </div>
          </div>
          <div className="request-callback-function-container">
            <h1 className="request-heading">
              Applying to be an ACCA? Get in touch with us!
            </h1>
            <input type="text" className="texting" placeholder="Phone Number" />
            <input type="text" className="texting" placeholder="Email" />
            <textarea
              className="texting"
              placeholder="Qualification"
            ></textarea>
            <textarea className="texting" placeholder="Percentage"></textarea>
            <button
              className="request-button"
              type="button"
              onClick={openModal}
            >
              Request Call Back
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

export default ACCAPrep;

/* import "./index.css";

const ACCAPrep = () => {
  return (
    <>
      <div className="acca-request-container">
        <div className="in-container">
          <div className="acca-container">
            <h1 className="heading-acca">
              Kick off your ACCA Prep journey with IndigoLearn{" "}
            </h1>
            <p className="acca-description">
              {" "}
              Sign-in and get instant access to our FREE courses
            </p>

            <div className="Broacher-contact-container">
              <button className="Seat-button">Seat allotment</button>
            </div>
          </div>
          <div className="request-callback-function-container">
            <h1 className="request-heading">
              Applying to be an ACCA? Get in touch with us!{" "}
            </h1>
            <input type="text" className="texting" placeholder="Phone Number" />
            <input type="text" className="texting" placeholder="Email" />
            <textarea
              type="text"
              className="texting"
              placeholder="Qualification"
            ></textarea>
            <textarea
              type="text"
              className="texting"
              placeholder="Percentage"
            ></textarea>
            <button className="request-button"> Request Call Back </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ACCAPrep;
*/
