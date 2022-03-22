import axios from 'axios'

const instance = axios.create({
    //baseURL: "https://short-video-backend-roliveira.herokuapp.com/"
    baseURL: "https://localhost:3000"

})

export default instance