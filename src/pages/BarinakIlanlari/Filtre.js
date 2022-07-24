import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { FiltreStyle, Header } from '../../styledComponents/BarinakIlanlariStyle';

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
            <FiltreStyle>
                <Header>BARINAKLAR</Header>
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
            </FiltreStyle>
        )
    }
}
export default Filtre;