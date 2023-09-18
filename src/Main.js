import React from "react";
import loc from "./images/Fill219.svg";

export default function Main(props) {
  return (
    <div className="main">
      <img src={`${props.imageUrl}`} className="img2" alt="img2" />
      <div className="loc-info">
        {" "}
        <span className="map">
          <img src={loc} className="loc" alt="loc" /> {props.location}
          <small className="view" href={props.googleMapsUrl}>
            View on Google Maps
          </small>
        </span>
        <h1 className="place">{props.title}</h1>
        <p className="duration">
          {props.startDate} - {props.endDate}
        </p>
        <p className="desciption">{props.description}</p>
      </div>
    </div>
  );
}
