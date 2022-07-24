import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import { Card, Icon } from 'semantic-ui-react';
import { ReactComponent as IlanResim } from "../../resimler/IlanResim.svg";
import { 
    CardBtn, 
    CardBtn2, 
    CardBtnText, 
    CardGroup, 
    CardHeader, 
    CardStyle 
} from '../../styledComponents/BarinakIlanlariStyle';

class ListeIlan extends React.Component {
    render() {
        return (
            <CardGroup>
                <Card.Group>
                    {this.props.ilanlar.map(ilan => {
                        return (
                            <CardStyle>
                                <Card>
                                    <Card.Content>
                                        <IlanResim />
                                        <CardHeader>{ilan.baslik}</CardHeader>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <CardBtn>
                                            <Link to={`ilan-detay/${ilan.baslik} , ${ilan.ilan_no}`}>
                                                <CardBtn2>
                                                    <CardBtnText>Detayları gör</CardBtnText>
                                                    <Icon name='chevron circle right' />
                                                </CardBtn2>
                                            </Link>
                                        </CardBtn>
                                    </Card.Content>
                                </Card>
                            </CardStyle>
                        )
                    })}
                </Card.Group>
            </CardGroup>
        )
    }
}
export default ListeIlan; 