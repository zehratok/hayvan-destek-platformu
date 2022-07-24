import React from "react";
import axios from 'axios';
import ListeIlan from './ListeIlan';
import { BarinakIlanlariStyle, Header, NoticeHeader } from "../../styledComponents/BarinakIlanlariStyle";
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
      <BarinakIlanlariStyle>
          <Header>
            <NoticeHeader>
              {this.props.match.params.barinak_adi}
            </NoticeHeader>
          </Header>
          <ListeIlan ilanlar={this.state.ilanlar} />
      </BarinakIlanlariStyle>
    );
  }
}

export default BarinakIlanlariListe;