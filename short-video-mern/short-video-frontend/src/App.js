import './App.css';
import Video from './components/Video';

function App() {
  const videos = [
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645478146/videoplayback_3_bcc7j7.mp4',
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645500286/videoplayback_4_maubaq.mp4',
    'https://res.cloudinary.com/rafaelnmo/video/upload/v1645500286/videoplayback_5_abtyfc.mp4'
];
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          url={videos[Math.floor(Math.random()*videos.length)]}
          channel="raffa_seven"
          description="That's a funny video"
          songName="This is the song"
          likes={345}
          shares={200}
          messages={90}
          />
        <Video
          url={videos[Math.floor(Math.random()*videos.length)]}
          channel="raffa_seven"
          description="That's a funny video"
          songName="This is the song"
          likes={345}
          shares={200}
          messages={93}
        />
        <Video
          url={videos[Math.floor(Math.random()*videos.length)]}
          channel="raffa_seven"
          description="That's a funny video"
          songName="This is the song"
          likes={345}
          shares={200}
          messages={80}
        />
      </div>
    </div>
  );
}

export default App;
