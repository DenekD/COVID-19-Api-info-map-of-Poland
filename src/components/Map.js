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
    // const deceased = this.props.data.filter(r => r.region.toLowerCase() === this.letersFormat(region.toLowerCase()))[0].deceasedCount;
    // console.log(infected);
    this.props.onMouseEnter(e);
    this.props.hoveredRegion(region);
    this.props.hoveredInfected(hoveredRegionData[0].infectedCount);
    this.props.hoveredDeceased(hoveredRegionData[0].deceasedCount);
  }
  MouseOut = (e) => {
    this.props.onMouseLeave(e);
  }

  render() {
    const map = this.state.regions.map(region => (
      <g key={region.regionName}>
        <path
          id={region.regionName}
          onMouseOver={(e) => this.mouseOver(e, region.regionName)}
          onMouseOut={(e) => this.MouseOut(e)}
          d={region.d} />
        <text className="text" textAnchor="middle" x={region.mapTextOffset_X} y={region.mapTextOffset_Y}>
          {region.regionName}
        </text>
      </g>
    ))

    return (
      <>
        <svg
          id="map"
          viewBox="0 0 615 615"
          strokeWidth="3"
        >
          {map}
        </svg>
      </>
    );
  }
}
