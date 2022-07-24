import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';
import { ReactComponent as IlanResim } from "../../resimler/IlanResim.svg";
import { DetailCard, CardDsc, DetailCardHeader, DetailCardText, DetailCardText2 } from '../../styledComponents/BarinakIlanlariStyle';

class ListeDetay extends React.Component {
    render() {
        return (
            <>
                {this.props.detay.map(detay => {
                    return (
                        <DetailCard>
                            <Card>
                                <Card.Content>
                                    <IlanResim />
                                    <DetailCardHeader>
                                        {detay.baslik}
                                    </DetailCardHeader>
                                    <CardDsc>
                                        <DetailCardText> Türü: </DetailCardText>
                                        <DetailCardText2>   {detay.tur} </DetailCardText2>
                                    </CardDsc>
                                    <CardDsc>
                                        <DetailCardText> Cinsi: </DetailCardText>
                                        <DetailCardText2>   {detay.cins} </DetailCardText2>
                                    </CardDsc>
                                    <CardDsc>
                                        <DetailCardText> Cinsiyeti: </DetailCardText>
                                        <DetailCardText2>  {detay.cinsiyet} </DetailCardText2>
                                    </CardDsc>
                                    <CardDsc>
                                        <DetailCardText> Yaşı: </DetailCardText>
                                        <DetailCardText2> {detay.yas} </DetailCardText2>
                                    </CardDsc>
                                    <CardDsc>
                                        <DetailCardText> İlan Tarihi: </DetailCardText>
                                        <DetailCardText2> {(detay.tarih).slice(0, 10)}</DetailCardText2>
                                    </CardDsc>
                                </Card.Content>
                            </Card>
                        </DetailCard>
                    )
                })}
            </>
        )
    }
}
export default ListeDetay; 