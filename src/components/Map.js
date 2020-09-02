import React from "react";
import styled from "styled-components";

const StyledSVGcontainer = styled.g`
  fill: lightblue;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:nth-of-type(1) {
    fill: #e70e02;
  }
  &:nth-of-type(2) {
    fill: #d84a05;
  }
  &:nth-of-type(3) {
    fill: #ec7505;
  }
  &:hover {
    fill: #277da1;
  }
  & path {
    stroke: white;
    stroke-width: 2;
  }
  & .text {
    fill: midnightblue;
    font-weight: bold;
    font-size: 13px;
  }
`;

export default function Map(props) {
  const map = props.regions.map((region) => (
    <StyledSVGcontainer
      key={region.regionName}
      onMouseOver={() => props.setMarkedRegion(region.regionName)}
      onMouseOut={() => props.setMarkedRegion(region.regionName)}
    >
      <path id={region.regionName} d={region.d} />
      <text
        className="text"
        textAnchor="middle"
        x={region.mapTextOffset_X}
        y={region.mapTextOffset_Y}
      >
        {region.infected}
      </text>
    </StyledSVGcontainer>
  ));

  const popup = props.regions.map((region) =>
    region.isHovered ? (
      <div
        className="popup"
        onMouseOver={() => props.setMarkedRegion(region.regionName)}
        style={{
          left: region.mapPopupLeft,
          bottom: region.mapPopupBottom,
        }}
      >
        województwo : <span> {region.regionName} </span> <br />
        zarazeni: <span> {region.infected} </span>
        <br />
        ofiary śmietrtelne: <span> {region.deceased} </span>
      </div>
    ) : null
  );

  return (
    <div className="mapa">
      <div className="mapContainer">
        {props.isLoaded ? (
          <svg viewBox="0 0 615 615"> {map} </svg>
        ) : (
          <i className="fas fa-virus"></i>
        )}
        {popup}
      </div>
    </div>
  );
}
