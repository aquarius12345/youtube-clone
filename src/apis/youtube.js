import axios from 'axios';

const KEY = 'AIzaSyDG4SEFhOZTcvAzjOCHNXQVQ-PsSpMdY5Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});