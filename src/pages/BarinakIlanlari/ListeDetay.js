import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import { ReactComponent as IlanResim } from "../../resimler/IlanResim.svg";
import './BarinakIlanlari.css';

class ListeDetay extends React.Component {
    render() {
        return (
            <div>
                {this.props.detay.map(detay => {
                    return (
                        <div className='detayKart'>
                            <Card>
                                <Card.Content>
                                    <IlanResim className='resim' />
                                    <Card.Header>{detay.baslik}</Card.Header>
                                    <Card.Description>
                                        Türü: {detay.tur}
                                    </Card.Description>
                                    <Card.Description>
                                        Cinsi: {detay.cins}
                                    </Card.Description>
                                    <Card.Description>
                                        Cinsiyeti: {detay.cinsiyet}
                                    </Card.Description>
                                    <Card.Description>
                                        Yaşı: {detay.yas}
                                    </Card.Description>
                                    <Card.Description>
                                        İlan Tarihi: {detay.tarih}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListeDetay; 