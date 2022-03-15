import axios from 'axios';
import authHeader from './authHeader';

const herkeseAcikSayfalar = () => {
    return axios.get("http://localhost:8080/public");
};

const gizliSayfalar = () => {
    return axios.get("http://localhost:8080/private" , {headers: authHeader ()});
};

const postService = {
    herkeseAcikSayfalar,
    gizliSayfalar,
};

export default postService;