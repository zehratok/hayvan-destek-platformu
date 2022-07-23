import React, { Component } from 'react';
import Slider from './Slider';
import Barinak from './Barinak';
import Gonderi from './Gonderi';
import { Link } from "react-router-dom";
import { Divider, Segment } from 'semantic-ui-react';
import {
  AnaSayfaStyle,
  Btn1,
  DividerStyle,
  Header1,
  Header2
} from '../../styledComponents/AnaSayfaStyle';

class AnaSayfa extends Component {

  render() {
    return (
      <AnaSayfaStyle>
        <Slider />
        <DividerStyle>
          <Segment>
            <Header1>
              Öne Çıkan Barınaklar
            </Header1>
            <Divider clearing />
            <Barinak />
            <Btn1>
              <Link to="barinaklar">
                <div className="ui vertical animated button" tabindex="0">
                  <div className="hidden content">
                    <i className="angle double right icon"></i>
                  </div>
                  <div className="visible content">
                    Devamını gör...
                  </div>
                </div>
              </Link>
            </Btn1>
          </Segment>
          <Segment>
            <Header2>
              Öne Çıkan Gönderiler
            </Header2>
            <Divider clearing />
            <Gonderi />
            <Btn1>
              <Link to="sosyal-pati">
                <div className="ui vertical animated button" tabindex="0">
                  <div className="hidden content">
                    <i className="angle double right icon"></i>
                  </div>
                  <div className="visible content">
                    Devamını gör...
                  </div>
                </div>
              </Link>
            </Btn1>
          </Segment>
        </DividerStyle>
      </AnaSayfaStyle>
    )
  }
}
export default AnaSayfa;