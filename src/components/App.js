import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Table from './Table';
import Map from './Map';
import Aside from './Aside';
import regions from '../assets/svgData'
import { regionsLetterFormat } from '../assets/utility';
import Backdrop from './Backdrop';

class App extends React.Component {

  state = {
    regions,
    isLoaded: false,
    infected: 0,
    deceased: 0,
    isAsideShow: false,
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch = () => {
    axios.get(`https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true`)
      .then(response => {
        this.setState({ infected: response.data.infected, deceased: response.data.deceased })
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
              isLoaded: true,

            })
            return i;
          })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

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

  handleToggleAside = () => {
    this.setState((prevState => ({ isAsideShow: !prevState.isAsideShow })))
  }


  render() {
    return (
      <div className="App">
        <Header toggleAside={this.handleToggleAside} />
        <main className="main">
          <Map
            regions={this.state.regions}
            setMarkedRegion={this.handleMarkedRegion}
            isLoaded={this.state.isLoaded}
          />
          <Table
            regions={this.state.regions}
            infected={this.state.infected}
            deceased={this.state.deceased}
          />
        </main>
        <Aside show={this.state.isAsideShow} />
        <Backdrop
          show={this.state.isAsideShow}
          toggleAside={this.handleToggleAside}
        />
      </div>
    );
  }

}

export default App;
