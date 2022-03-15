import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnaSayfa from "./pages/AnaSayfa/AnaSayfa";
import BarinakIlanlari from "./pages/BarinakIlanlari/BarinakIlanlari";
import BarinakIlanlariListe from "./pages/BarinakIlanlari/BarinakIlanlariListe";
import VeterinereDanis from "./pages/VeterinereDanis/VeterinereDanis";
import SosyalPati from "./pages/SosyalPati/SosyalPati";
import Kaydol from "./pages/Kaydol/Kaydol";
import GirisYap from "./pages/GirisYap/GirisYap";
import Hakkimizda from "./pages/Hakkimizda";
import IlanDetay from "./pages/BarinakIlanlari/IlanDetay";
import Profil from "./pages/Profil/Profil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={AnaSayfa}></Route>
          <Route path="/barinaklar" component={BarinakIlanlari}></Route>
          <Route path="/barinak-ilanlari/:barinak_adi, :barinak_no" component={BarinakIlanlariListe}></Route>
          <Route path="/barinak-ilanlari/ilan-detay/:baslik, :ilan_no" component={IlanDetay}></Route>
          <Route path="/veterinere-danis" component={VeterinereDanis}></Route>
          <Route path="/sosyal-pati" component={SosyalPati}></Route>
          <Route path="/kaydol" component={Kaydol}></Route>
          <Route path="/giris-yap" component={GirisYap}></Route>
          <Route path="/hakkimizda" component={Hakkimizda}></Route>
          <Route path="/profil" component={Profil}></Route>
        </Switch>
        <Footer/>

      </BrowserRouter>
     

    </>
  );
}

export default App;