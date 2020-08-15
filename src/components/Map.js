import React from 'react';
import styled from 'styled-components'


const StyledSVGcontainer = styled.g`
  fill: lightblue;
  cursor: pointer;
  transition: all 0.3s ease-in;

    &:nth-of-type(1) {
    fill: #D32F2F;
    }
    &:nth-of-type(2) {
    fill: #E57373;
    }
    &:nth-of-type(3) {
    fill: #FFCDD2;
    }
    &:hover {
      fill: #ffb74d;
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


export default function Mapa(props) {

  const mouseOver = (e, region) => {
    const hoverRegion = {
      region: region.regionName,
      infected: region.infected,
      deceased: region.deceased,
    }
    props.onMouseEnter(e);
    props.hoveredRegion(hoverRegion);
    props.setMarkedRegion(region)
  }

  const mouseOut = (e, region) => {
    props.onMouseLeave(e);
    props.setMarkedRegion(region)
  }

  const map = props.regions.map(region => (
    <StyledSVGcontainer
      key={region.regionName}
      onMouseOver={(e) => mouseOver(e, region)}
      onMouseOut={(e) => mouseOut(e, region)}>
      <path
        id={region.regionName}
        d={region.d} />
      <text className="text" textAnchor="middle" x={region.mapTextOffset_X} y={region.mapTextOffset_Y}>
        {region.infected}
      </text>
    </StyledSVGcontainer>
  ))


  return (
    <>
      <svg viewBox="0 0 615 615" >
        {map}
      </svg>
      <div className={props.regions[1].isHovered ? 'poper on' : 'poper'}>
        dupa
      </div>
    </>
  )

}


