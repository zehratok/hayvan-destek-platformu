import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ReactComponent as GirisYapResim } from "../../resimler/GirisYapResim.svg";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Btn,
  Form,
  FormElement,
  FormInput,
  FormText,
  Giris,
  Image,
  Link,
  LinkText
} from '../../styledComponents/KayitGirisStyle';

class GirisYap extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);


    const istekVucut = {
      "kullanici_adi": event.target.elements.kullanici_adi.value,
      "parola": event.target.elements.parola.value
    }

    const response = await axios.post('http://localhost:8080/giris-yap', istekVucut);
    localStorage.setItem("token", response.data.access_token)


    console.log(data);
  }

  render() {
    return (
      <Giris>
        <Image>
          <GirisYapResim />
        </Image>
        <Form>
          <FormElement onSubmit={this.handleSubmit}>
            <FormText htmlFor="kullanici_adi">Kullanıcı adı girin</FormText>
            <FormInput type="text" placeholder='Kullanıcı adı'
              id="kullanici_adi" name='kullanici_adi'
            />
            <FormText htmlFor="parola">Parola girin</FormText>
            <FormInput ype="text" placeholder='Parola' id='parola'
              name='parola'
            />

            <Btn> Giriş Yap </Btn>
          </FormElement>
          <Link>
            Hesabınız yok mu?
            <LinkText href="/kaydol">Kaydolun.</LinkText>
          </Link>
        </Form>
      </Giris>
    )
  }
}
export default GirisYap;