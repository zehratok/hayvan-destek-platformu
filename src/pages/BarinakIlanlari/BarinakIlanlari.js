import React from 'react';
import axios from 'axios';
import Filtre from './Filtre';
import Liste from './Liste';
import './BarinakIlanlari.css';

class BarinakIlanlari extends React.Component {

  constructor(props) {

    super(props);
    this.state = { sehir: [] };
  }

  async componentDidMount() {
    const response = await axios.get(`http://localhost:8080/barinaklar`)
    this.setState({ sehir: response.data });
  }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(`http://localhost:8080/barinaklar/${entry}`)
    this.setState({ sehir: response.data });
  }

  render() {
    return (
      <div className='BarinakIlanlari' >
        <Filtre onSearchSubmit={this.onSearchSubmit} />
        <Liste sehir={this.state.sehir} />

      </div>
    )
  }
}
export default BarinakIlanlari;