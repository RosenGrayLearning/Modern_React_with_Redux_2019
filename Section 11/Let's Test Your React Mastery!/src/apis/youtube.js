import axios from 'axios';

const KEY = 'AIzaSyB2H1M-mfB5ZyORi9DdjlmiCDz3oktV0Hs';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});