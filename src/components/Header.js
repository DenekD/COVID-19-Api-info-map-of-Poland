import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <i className="fas fa-bars" onClick={props.toggleAside}></i>
      <h3>mapa zakazeń covid-19 w poslce</h3>
    </div>
  );
}
