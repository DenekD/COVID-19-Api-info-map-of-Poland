import React from 'react';
import '../styles/App.css';
import axios from 'axios';
import Table from './Table';
import PopOver from './PopOver';
import regions from '../assets/svgData'


class App extends React.Component {
  state = {
    regions
  }

  regionsLetterFormat = (word) => {
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
                if (this.regionsLetterFormat(r.regionName.toLowerCase()) === i.region) {
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
        <header>Covid 19 Poland</header>
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
