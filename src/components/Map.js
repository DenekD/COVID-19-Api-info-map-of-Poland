import React from 'react';
import regions from '../assets/svgData'

export default class Mapa extends React.Component {
  state = {
    regions
  }

  letersFormat = (word) => {
    word = word.replace("ę", "e");
    word = word.replace("ó", "o");
    word = word.replace("ą", "a");
    word = word.replace("ś", "s");
    word = word.replace("ł", "l");
    word = word.replace("ż", "z");
    word = word.replace("ź", "z");
    word = word.replace("ć", "c");
    word = word.replace("ń", "n");
    return word;
  }

  mouseOver = (e, region) => {
    const hoveredRegionData = this.props.data.filter(r => r.region.toLowerCase() === this.letersFormat(region.toLowerCase()));
    const hoverRegion = {
      region,
      infected: hoveredRegionData[0].infectedCount,
      deceased: hoveredRegionData[0].deceasedCount,
    }
    this.props.onMouseEnter(e);
    this.props.hoveredRegion(hoverRegion);
    this.props.setActiveRegion(region)
  }
  MouseOut = (e) => {
    this.props.onMouseLeave(e);
    this.props.setActiveRegion("")
  }

  render() {
    const map = this.state.regions.map(region => (
      <g key={region.regionName}
        onMouseOver={(e) => this.mouseOver(e, region.regionName)}
        onMouseOut={(e) => this.MouseOut(e)}>
        <path
          id={region.regionName}
          d={region.d} />
        <text className="text" textAnchor="middle" x={region.mapTextOffset_X} y={region.mapTextOffset_Y}>
          {region.regionName}
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
