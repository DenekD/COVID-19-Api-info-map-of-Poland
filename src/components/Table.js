import React from 'react'

export default function Table(props) {

  const table = props.regions.map(region => (
    <tr className={region.isHovered ? "select" : null}>
      <td className="tdRegionName">{region.regionName}</td>
      <td>{region.infected}</td>
      <td>{region.deceased}</td>
    </tr>
  ))

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>województwo</th>
            <th>zarazeni</th>
            <th>ofiary smiertelne</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>

      </table>
    </div>
  )
}
