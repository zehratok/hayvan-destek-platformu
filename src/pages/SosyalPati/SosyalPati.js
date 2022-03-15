import React, { Component } from 'react';
import axios from 'axios';
import './SosyalPati.css';
import Liste from './Liste';


class SosyalPati extends Component {

  constructor(props) {
    super(props);
    this.state = { gonderi: [] };
  }
  async componentDidMount() {
    const response = await axios.get(`http://localhost:8080/gonderiler`)
    this.setState({ gonderi: response.data });
  }

  render() {
    return (
      <div className='SosyalPati'>
        <Liste gonderi={this.state.gonderi} />
      </div>
    )
  }
}
export default SosyalPati;