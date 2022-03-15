import React, { Component } from 'react';
import './AnaSayfa.css';
import Slider from './Slider';
import Barinak from './Barinak';
import Gonderi from './Gonderi';
import { Link } from "react-router-dom";
import { Divider, Segment } from 'semantic-ui-react';

class AnaSayfa extends Component {
  
render() {
  return (
    <div className='AnaSayfa'>
      <Slider />
      <div className='divider'>
        <Segment>
          <div className='baslik1'>
            Öne Çıkan Barınaklar
          </div>
          <Divider clearing />
          <Barinak />
          <div className='buton1'>
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
          </div>
        </Segment>
        <Segment>
          <div className='baslik2'>
            Öne Çıkan Gönderiler
          </div>
          <Divider clearing />
          <Gonderi />
          <div className='buton1'>
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
          </div>
        </Segment>
      </div>
    </div>
  )
}
}
export default AnaSayfa;