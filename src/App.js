import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
//import youtube from '../src/apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from './hooks/useVideos';


const App = () => {
  //const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // useEffect(()=>{
  //   onTermSubmit('buildings');
  // }, []);

  // const onTermSubmit = async term => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   })
  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);   
  // };

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search}/>
      <div className='ui grid'>
        <div className='ui row'>
          <div className='ten wide column'>
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className='five wide column'>
            <VideoList 
              onVideoSelect={setSelectedVideo} 
              videos={videos}
            />
          </div>  
        </div>
      </div>
      
    </div>

  );

}


// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit('house');
//   }

//   onTermSubmit = async term => {
//     const response = await youtube.get('/search', {
//       params: {
//         q: term
//       }
//     })
//     this.setState({ 
//       videos: response.data.items,
//       selectedVideo: response.data.items[0] 
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video })
//   }

//   render() {
//     return (
//       <div className='ui container'>
//         <SearchBar onFormSubmit={this.onTermSubmit}/>
//         <div className='ui grid'>
//           <div className='ui row'>
//             <div className='eleven wide column'>
//               <VideoDetail video={this.state.selectedVideo}/>
//             </div>
//             <div className='five wide column'>
//               <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
//             </div>
            
//           </div>
//         </div>
        
//       </div>

//     );
//   }
// }

export default App;
