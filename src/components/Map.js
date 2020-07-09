import React from 'react';

export default class Mapa extends React.Component {

  mouseOver = (e, region) => {
    const hoverRegion = {
      region: region.regionName,
      infected: region.infected,
      deceased: region.deceased,
    }
    this.props.onMouseEnter(e);
    this.props.hoveredRegion(hoverRegion);
    this.props.setMarkedRegion(region)
  }
  MouseOut = (e, region) => {
    this.props.onMouseLeave(e);
    this.props.setMarkedRegion(region)
  }

  render() {
    const map = this.props.regions.map(region => (
      <g key={region.regionName}
        onMouseOver={(e) => this.mouseOver(e, region)}
        onMouseOut={(e) => this.MouseOut(e, region)}>
        <path
          id={region.regionName}
          d={region.d} />
        <text className="text" textAnchor="middle" x={region.mapTextOffset_X} y={region.mapTextOffset_Y}>
          {region.infected}
        </text>
      </g>
    ))

    return (
      <>
        <svg id="map" viewBox="0 0 615 615" strokeWidth="3">
          {map}
        </svg>
      </>
    );
  }
}
