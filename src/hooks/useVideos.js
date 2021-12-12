import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search('buildings');
    }, []);

    const search = async term => {
        const response = await youtube.get('/search', {
          params: {
            q: term
          }
        })
        setVideos(response.data.items);  
    };

    return [videos, search];
};

export default useVideos;