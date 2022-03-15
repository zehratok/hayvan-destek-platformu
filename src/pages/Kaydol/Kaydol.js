import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Kaydol.css';
import { ReactComponent as KaydolResim } from "../resimler/KaydolResim.svg";
import axios from 'axios';

class Kaydol extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.post('http://localhost:8080/giris-yap', {

    });
    console.log(data);
  }

  render() {
    return (
      <div className="kaydol">
        <KaydolResim className="resim" />
        <div className="form">
          <form className="formEleman" onSubmit={this.handleSubmit}>
            <label className="text" htmlFor="kullanici_tipi">Kullanıcı tipi seçin</label>
            <select className="secim" id='kullanici_tipi' name="kullanici_tipi">
              <option value="1"> Kullanıcı </option>
              <option value="2">Veteriner</option>
              <option value="3">Barınak Yetkilisi</option>
            </select>

            <label className="text" htmlFor="kullanici_adi">Kullanıcı adı girin</label>
            <input type="text" placeholder="Kullanıcı adı"
              id='kullanici-adi' name='kullaniic_adi' />

            <label className="text" htmlFor="email">Mail adresi girin </label>
            <input type="text" placeholder="Email"
              id='email' name='email' />

            <label className="text" htmlFor="parola">Parola oluşturun</label>
            <input type="text" placeholder="Parola"
              id='parola' name='parola' />

            <button className="kayitButonu" >Kaydol</button>
          </form>
          <div className="link">
            Hesabınız mı var?
            <a href="./giris-yap">Giriş yapın.</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Kaydol;



