import React, { Component } from 'react';
import axios from 'axios';
import Liste from '../SosyalPati/Liste';

class Gonderi extends Component {
    constructor(props) {
        super(props);
        this.state = { gonderi: [] };
    }
    async componentDidMount() {
        const response = await axios.get(`http://localhost:8080/gonderiler/72`)
        this.setState({ gonderi: response.data });
    }
    render() {
        return (
            <>
                <Liste gonderi={this.state.gonderi} />
            </>
        )
    }
}
export default Gonderi;