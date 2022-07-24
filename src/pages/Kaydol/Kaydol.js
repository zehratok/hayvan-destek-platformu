import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ReactComponent as KaydolResim } from "../../resimler/KaydolResim.svg";
import axios from 'axios';
import {
  Btn,
  Form,
  FormElement,
  FormInput,
  FormText,
  Image,
  Kayit,
  Link,
  LinkText,
  Select
} from '../../styledComponents/KayitGirisStyle';

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
      <Kayit>
        <Image>
          <KaydolResim />
        </Image>
        <Form>
          <FormElement onSubmit={this.handleSubmit}>
            <FormText htmlFor="kullanici_tipi">Kullanıcı tipi seçin</FormText>
            <Select id='kullanici_tipi' name="kullanici_tipi">
              <option value="1"> Kullanıcı </option>
              <option value="2">Veteriner</option>
              <option value="3">Barınak Yetkilisi</option>
            </Select>

            <FormText htmlFor="kullanici_adi">Kullanıcı adı girin</FormText>
            <FormInput type="text" placeholder="Kullanıcı adı"
              id='kullanici-adi' name='kullaniic_adi' />

            <FormText htmlFor="email">Mail adresi girin </FormText>
            <FormInput type="text" placeholder="Email"
              id='email' name='email' />

            <FormText htmlFor="parola">Parola oluşturun</FormText>
            <FormInput type="text" placeholder="Parola"
              id='parola' name='parola' />

            <Btn>Kaydol</Btn>
          </FormElement>
          <Link>
            Hesabınız mı var?
            <LinkText href="./giris-yap">Giriş yapın.</LinkText>
          </Link>
        </Form>
      </Kayit>
    );
  }
}
export default Kaydol;



