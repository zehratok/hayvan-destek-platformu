export default function authHeader() {
    const kullanici = JSON.parse(localStorage.getItem("kullanici"));

    if (kullanici && kullanici.accessToken) {
        return { "x-auth-token": kullanici.accessToken };
    }
    else {
        return {};
    }
}