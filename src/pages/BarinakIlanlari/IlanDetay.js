import React from "react";
import axios from 'axios';
import ListeDetay from './ListeDetay';
import "./BarinakIlanlari.css";

class IlanDetay extends React.Component {

    constructor(props) {

        super(props);
        this.state = { detay: [] };
    }

    async componentDidMount() {
        const response = await axios.get(`http://localhost:8080/barinak-ilanlari/ilan-detay/${this.props.match.params.ilan_no}`)
        this.setState({ detay: response.data });
    }

    render() {
        return (
            <div className='BarinakIlanlari' >

                <div className="detay">
                    <ListeDetay detay={this.state.detay} />
                </div>

            </div>
        );
    }
}

export default IlanDetay;