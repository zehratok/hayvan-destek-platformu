import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import { Card, Icon } from 'semantic-ui-react';
import { ReactComponent as BarinakResim } from "../../resimler/BarinakResim.svg";
import './BarinakIlanlari.css';

class Liste extends React.Component {
    render() {
        return (
            <div className='BarinakListe'>
                <Card.Group className='kartGrubu'>
                    {this.props.sehir.map(barinak => {
                        return (
                            <div className='card'>
                                <Card >
                                    <Card.Content>
                                        <BarinakResim className='resim' />
                                        <Card.Header>{barinak.barinak_adi}</Card.Header>
                                        <Card.Meta>{barinak.adres}</Card.Meta>
                                        <Card.Description>
                                            {barinak.ilce} / {barinak.il}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='kartButon'>
                                            <Link to={`barinak-ilanlari/${barinak.barinak_adi} , ${barinak.barinak_no}`}>
                                                <button className="kartButon1">
                                                    <span>İlanları gör</span>
                                                    <Icon name='chevron circle right' />
                                                </button>
                                            </Link>
                                        </div>
                                    </Card.Content>
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