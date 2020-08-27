import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Table from './Table';
import Map from './Map';
import regions from '../assets/svgData'
import { regionsLetterFormat } from '../assets/utility';

class App extends React.Component {

  state = {
    regions,
    isLoaded: false
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
            this.setState({
              regions: states.sort((a, b) => b.infected - a.infected),
              isLoaded: true
            })
            return i;
          })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // {props.regions.sort((a, b) => b.infected - a.infected)

  handleMarkedRegion = (regionName) => {
    const regions = this.state.regions.map(r => {

      if (r.regionName === regionName) {
        return {
          ...r,
          isHovered: !r.isHovered,
        }
      }
      return r;
    })
    this.setState({
      regions
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Map
            regions={this.state.regions}
            setMarkedRegion={this.handleMarkedRegion}
            isLoaded={this.state.isLoaded}
          />
          <Table regions={this.state.regions} />
        </main>
      </div>
    );
  }

}

export default App;
