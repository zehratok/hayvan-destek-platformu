import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon } from 'semantic-ui-react';
import { ReactComponent as SosyalPatiResim } from "../../resimler/SosyalPatiResim.svg";
import './SosyalPati.css';

class Liste extends React.Component {
    render() {
        return (
            <div className='sosyalListe'>
                <Card.Group className='kartGrubu'>
                    {this.props.gonderi.map(gonderiler => {
                        return (
                            <div className='card'>
                                <Card>
                                    <SosyalPatiResim className='resim' />
                                    <Card.Content extra className='kart'>
                                        <a>
                                            <Icon name='heart' />
                                            0
                                        </a>
                                    </Card.Content>
                                    <Card.Content className='kart'>
                                        <Card.Description className='kart'>
                                            {gonderiler.gonderi_aciklama}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Meta className='kart'>
                                        <span className='date'>{gonderiler.tarih}</span>
                                    </Card.Meta>

                                </Card>
                            </div>
                        )
                    })}
                </Card.Group>
            </div>
        )
    }
}
export default Liste; 