import React from 'react';
import '../styles/App.css';
import axios from 'axios';
import Table from './Table';
import PopOver from './PopOver';

class App extends React.Component {
  state = {
    activeRegion: '',
    deceased: 0,
    infected: 0,
    infectedByRegion: [],
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch = () => {
    axios.get(`https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true`)
      .then(response => {
        this.setState({
          deceased: response.data.deceased,
          infected: response.data.infected,
          infectedByRegion: response.data.infectedByRegion,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  handleSetActiveRegion = (region) => {
    this.setState({ activeRegion: region })
  }

  render() {
    return (
      <>
        <header>Covid 19 Poland</header>
        <div className="main">
          <div className="map">
            <PopOver
              data={this.state.infectedByRegion}
              setActiveRegion={this.handleSetActiveRegion}
            />
          </div>
          <div className="table">
            <Table
              data={this.state.infectedByRegion}
              activeRegion={this.state.activeRegion} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
