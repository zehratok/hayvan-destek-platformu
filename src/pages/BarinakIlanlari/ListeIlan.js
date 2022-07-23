import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import { Card, Icon } from 'semantic-ui-react';
import { ReactComponent as IlanResim } from "../../resimler/IlanResim.svg";
import './BarinakIlanlari.css';

class ListeIlan extends React.Component {
    render() {
        return (
            <div>
                <Card.Group className='kartGrubu'>
                    {this.props.ilanlar.map(ilan => {
                        return (
                            <div className='card'>
                                <Card>
                                    <Card.Content>
                                        <IlanResim className='resim' />
                                        <Card.Header>{ilan.baslik}</Card.Header>
                                        <Card.Description>
                                            Türü: {ilan.tur} -  Cinsi: {ilan.cins}
                                        </Card.Description>
                                        <Card.Description>
                                            Cinsiyeti: {ilan.cinsiyet} - Yaşı: {ilan.yas}
                                        </Card.Description>
                                        <Card.Description>
                                            İlan Tarihi: {ilan.tarih}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='kartButon'>
                                            <Link to={`ilan-detay/${ilan.baslik} , ${ilan.ilan_no}`}>
                                                <button className="kartButon1">
                                                    <span>Detayları gör</span>
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
export default ListeIlan; 