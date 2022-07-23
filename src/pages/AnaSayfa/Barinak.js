import React, { Component } from 'react';
import axios from 'axios';
import Liste from '../BarinakIlanlari/Liste';

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
            <>
                <Liste sehir={this.state.sehir} />
            </>
        )
    }
}
export default Barinak;