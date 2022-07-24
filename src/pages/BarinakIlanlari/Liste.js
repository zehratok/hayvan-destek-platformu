import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
import { Card, Icon } from 'semantic-ui-react';
import { ReactComponent as BarinakResim } from "../../resimler/BarinakResim.svg";
import { 
    BarinakListe, 
    CardBtn, 
    CardBtn2,
    CardBtnText,
    CardGroup, 
    CardStyle 
} from '../../styledComponents/BarinakIlanlariStyle'
class Liste extends React.Component {
    render() {
        return (
            <BarinakListe>
                <CardGroup>
                    <Card.Group>
                        {this.props.sehir.map(barinak => {
                            return (
                                <CardStyle>
                                    <Card >
                                        <Card.Content>
                                            <BarinakResim  />
                                            <Card.Header>{barinak.barinak_adi}</Card.Header>
                                            <Card.Meta>{barinak.adres}</Card.Meta>
                                            <Card.Description>
                                                {barinak.ilce} / {barinak.il}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <CardBtn>
                                                <Link to={`barinak-ilanlari/${barinak.barinak_adi} , ${barinak.barinak_no}`}>
                                                    <CardBtn2>
                                                        <CardBtnText>İlanları gör</CardBtnText>
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
            </BarinakListe>
        )
    }
}
export default Liste; 