import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './BarinakIlanlari.css';

class Filtre extends Component {

    constructor(props) {
        super(props);
        this.state = { entry: '' };
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return (
            <div className='filtre'>
                <div className='baslik'>BARINAKLAR</div>
                <form className='ui' onSubmit={this.onFormSubmit}>
                    <div className='ui icon input'>
                        <input
                            type="text"
                            placeholder="Şehir giriniz..."
                            onChange={(event) => this.setState({ entry: event.target.value })}
                            value={this.setState.entry}
                        />
                        <i className='search icon'></i>
                    </div>
                </form>
            </div>
        )
    }
}
export default Filtre;