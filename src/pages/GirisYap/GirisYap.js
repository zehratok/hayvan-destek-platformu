import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './GirisYap.css';
import { ReactComponent as GirisYapResim } from "../../resimler/GirisYapResim.svg";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class GirisYap extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);


    const istekVucut = {
      "kullanici_adi":event.target.elements.kullanici_adi.value,
      "parola":event.target.elements.parola.value
    }

   const response = await axios.post('http://localhost:8080/giris-yap',istekVucut);
   localStorage.setItem("token", response.data.access_token)

    
    console.log(data);
  }

  render() {
    return (
      <div className="girisYap">
        <GirisYapResim className="resim" />
        <div className="form">
          <form className="formEleman" onSubmit={this.handleSubmit}>
            <label className="text" htmlFor="kullanici_adi">Kullanıcı adı girin</label>
            <input type="text" placeholder='Kullanıcı adı'
              id="kullanici_adi" name='kullanici_adi'
            />
            <label className="text" htmlFor="parola">Parola girin</label>
            <input ype="text" placeholder='Parola' id='parola'
              name='parola'
            />

            <button className='girisButonu' >Giriş Yap</button>
          </form>
          <div className="link">
            Hesabınız yok mu?
            <a href="/kaydol">Kaydolun.</a>
          </div>
        </div>
      </div>
    )
  }
}
export default GirisYap;