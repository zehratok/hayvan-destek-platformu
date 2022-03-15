import React from "react";
import axios from 'axios';
import ListeIlan from './ListeIlan';
import './BarinakIlanlari.css';
class BarinakIlanlariListe extends React.Component {

  constructor(props) {

    super(props);
    this.state = { ilanlar: [] };
  }

  async componentDidMount() {
    const response = await axios.get(`http://localhost:8080/barinak-ilanlari/${this.props.match.params.barinak_no}`)
    this.setState({ ilanlar: response.data });
  }

  render() {
    return (
      <div className='BarinakIlanlari' >
        <div className="ilan">
          <div className="baslik">
            <div className="ilanBaslik">
              {this.props.match.params.barinak_adi}
            </div>
          </div>
          <ListeIlan ilanlar={this.state.ilanlar} />
        </div>
      </div>
    );
  }
}

export default BarinakIlanlariListe;