import Reat, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from     './VideoSidebar'



const Video = ({url, channel, description, songName, likes, shares, messages}) => {

    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }


    return (
        <div className='video'>
            {/*Comentário em react 
                <video src='https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4' className='video__player' loop>
                </video>

                https://res.cloudinary.com/rafaelnmo/video/upload/v1645500286/videoplayback_4_maubaq.mp4

                https://res.cloudinary.com/rafaelnmo/video/upload/v1645500286/videoplayback_5_abtyfc.mp4

             */}
            <video  src={url}
                    className='video__player'
                    loop
                    ref={videoRef}
                    onClick={handleVideoPress}>
            </video>
            <VideoFooter channel={channel} description={description} songName={songName}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>


    )
}

export default Video