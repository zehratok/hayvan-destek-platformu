import React, { Component } from 'react';
import axios from 'axios';
import Liste from '../BarinakIlanlari/Liste';
import './AnaSayfa.css';

class Barinak extends Component {

    constructor(props) {

        super(props);
        this.state = { sehir: [] };
    }

    async componentDidMount() {
        const response = await axios.get(`http://localhost:8080/onecikanbarinaklar`)
        this.setState({ sehir: response.data });
    }


    render() {
        return (
            <div className='oneCikan1'>
                <Liste sehir={this.state.sehir} />
            </div>
        )
    }
}
export default Barinak;