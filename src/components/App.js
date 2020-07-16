import React from 'react';
import '../styles/App.css';
import { regionsLetterFormat } from '../assets/utility';
import axios from 'axios';
import Table from './Table';
import PopOver from './PopOver';
import regions from '../assets/svgData';
import Header from './Header';


class App extends React.Component {
  state = {
    regions
  }


  componentDidMount() {
    this.performSearch()
  }

  performSearch = () => {
    axios.get(`https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true`)
      .then(response => {
        response.data.infectedByRegion
          .map(i => {
            const states = this.state.regions
              .map(r => {
                if (regionsLetterFormat(r.regionName.toLowerCase()) === i.region) {
                  return {
                    ...r,
                    infected: i.infectedCount,
                    deceased: i.deceasedCount,
                    isHovered: false,
                  }
                } else
                  return r;
              });
            this.setState({ regions: states })
            return i;
          })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  handleMarkedRegion = (region) => {
    const regions = this.state.regions.map(r => {

      if (r.regionName === region.regionName) {
        return {
          ...r,
          isHovered: !r.isHovered,
        }
      }
      return r;
    })
    this.setState({ regions })

  }


  render() {
    return (
      <>
        <Header />
        <div className="main">
          <div className="map">
            <PopOver
              regions={this.state.regions}
              setMarkedRegion={this.handleMarkedRegion}
            />
          </div>
          <div className="table">
            <Table
              regions={this.state.regions}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
