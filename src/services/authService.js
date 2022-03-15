import axios from 'axios';


const kayit = (kullanici_adi, parola, email, kullanici_tipi) => {
    return axios
        .post("http://localhost:8080/kayitol", {
            kullanici_adi,
            parola,
            email,
            kullanici_tipi,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("kullanici", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const giris = (kullanici_adi, parola) => {
    return axios
        .post("http://localhost:8080/giris-yap", {
            kullanici_adi,
            parola,
        })
        .then((response) => {
            if (response.data.accessToken) {
                console.log(response.data) //bunu konsola bastı mı? giriş yapınca
                localStorage.setItem("access_token", response.data.accessToken);
            }
            return response.data;
        });
};

const cikis = () => {
    localStorage.removeItem("kullanici");
};

const mevcutKullanici = () => {
    return JSON.parse(localStorage.getItem("kullanici"));
};

const authService = {
    kayit,
    giris,
    cikis,
    mevcutKullanici
};

export default authService;