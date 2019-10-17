import axios from 'axios';

/*
 * @axios.create()
 * Create Instance of an axios client with couple of defaulted properties
 * that customize to make certain requests to a certain/spesific end point
*/

const splashApiSettings = {
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization  : 'Client-ID 4922bb94f419b60193d40ff32d99bf996c83d369ddd29900f332d43bd08adf4d'
     }
}

export default axios.create(splashApiSettings);      


