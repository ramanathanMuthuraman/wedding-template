import React from "react";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-wrapper">
      <div className="other-info">
        <div className="time-wrapper details-section">
          <FontAwesomeIcon size="3x" icon={faClock} />
          <span className="sub-title">When</span>
          <span>August 24, 2020, 9:30 - 10:30 AM</span>
        </div>
        <div className="venue-wrapper details-section">
          <FontAwesomeIcon size="3x" icon={faMapMarkedAlt} />
          <span className="sub-title">Where</span>

          <span>Puduppatti Pon, Ponnamaravathi, Tamil Nadu 622407</span>
        </div>
      </div>
      <div className="map-wrapper">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15703.136481392254!2d78.545047!3d10.2789707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f9891c0f3dfd568!2sBhuvaneshwari%20Thirumana%20Mandapam!5e0!3m2!1sen!2sin!4v1597504901607!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
