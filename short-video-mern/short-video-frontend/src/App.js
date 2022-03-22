import React, {useState, useEffect} from 'react';
import './App.css';
import Video from './components/Video';
import axios from './components/axios';


function App() {
  const video = [
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645478146/videoplayback_3_bcc7j7.mp4',
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645500286/videoplayback_4_maubaq.mp4',
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645500286/videoplayback_5_abtyfc.mp4',
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645478146/videoplayback_3_bcc7j7.mp4'
];

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData(){
      const res = await axios.get("/v2/posts")
      setVideos(res.data)
      return res
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className='app__videos'>
        {videos.map(({url, channel, description, songName, likes, shares, messages}) => (
          <Video 
            key={url}
            url={video[url]}
            channel={channel}
            description={description}
            songName={songName}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))
        }
      </div>
    </div>
  );
}

export default App;
