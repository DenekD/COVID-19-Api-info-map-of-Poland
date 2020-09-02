import React from "react";

export default function Table(props) {
  const table = props.regions.map((region) => (
    <tr key={region.regionName} className={region.isHovered ? "select" : null}>
      <td colSpan="2" className="tdRegionName">
        {region.regionName}
      </td>
      <td colSpan="1">{region.infected}</td>
      {/* percentage value */}
      {/* <td colSpan="1">({(region.infected * 100 / props.infected).toFixed(2)}%)</td> */}
      <td colSpan="1">{region.deceased}</td>
      {/* percentage value */}
      {/* <td colSpan="1">({(region.deceased * 100 / props.deceased).toFixed(2)}%)</td> */}
    </tr>
  ));

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Łączna liczba przypadków</th>
            <th colSpan="2">łaczna liczba zgonów</th>
          </tr>
          <tr className="summary">
            <th colSpan="2">{props.infected}</th>
            <th colSpan="2">{props.deceased}</th>
          </tr>

          <tr>
            <th colSpan="2">lokalizacja</th>
            <th colSpan="1">zarażeni</th>
            <th colSpan="1">ofiary śmiertelne</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}
